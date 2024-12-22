const axios = require('axios');

const getHaloWiFiToken = async () => {
  try {
    const response = await axios.post(
      'https://one.halowifi.com/api/external/token',
      {
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET,
      },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
    return response.data.token;
  } catch (error) {
    console.error('Error fetching HaloWiFi token:', error.message);
    return null;
  }
};

module.exports = getHaloWiFiToken;
