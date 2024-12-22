const axios = require('axios');
const Session = require('../models/Session');
const getHaloWiFiToken = require('../utils/haloWiFiToken');

const triggerLogin = async (req, res) => {
  const {
    location_id,
    network_id,
    session_id,
    login_app_id,
    session_duration,
    bandwidth,
    login_username,
    login_password,
    first_name,
    last_name,
    email,
  } = req.body;

  if (!location_id || !network_id || !session_id || !login_app_id) {
    return res.status(400).json({
      status: 'error',
      message: 'Invalid request parameters',
    });
  }

  try {
    const token = await getHaloWiFiToken();
    if (!token) {
      return res.status(401).json({
        status: 'error',
        message: 'Failed to get authentication token',
      });
    }

    const response = await axios.post(
      'http://localhost:8000/api/connect/external/trigger-login',
      {
        location_id,
        network_id,
        session_id,
        login_app_id,
        session_duration,
        bandwidth,
        login_username,
        login_password,
        first_name,
        last_name,
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const session = new Session({
      location_id,
      network_id,
      session_id,
      user_id: response.data.user_id || null,
    });
    await session.save();

    res.status(200).json({
      status: 'success',
      message: 'Session validated successfully',
      redirect_url: response.data.redirect_url,
    });
  } catch (error) {
    console.error('Error triggering login:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Failed to trigger login',
    });
  }
};

module.exports = { triggerLogin };
