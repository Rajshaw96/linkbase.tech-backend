const Connect = require('../models/Connect');

// Get all connections
exports.getAllConnections = async (req, res) => {
  try {
    const connections = await Connect.find();
    res.json(connections);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get connection by ID
exports.getConnectionById = async (req, res) => {
  try {
    const connection = await Connect.findById(req.params.id);
    if (!connection) return res.status(404).json({ message: 'Connection not found' });
    res.json(connection);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new connection
exports.createConnection = async (req, res) => {
  try {
    const newConnection = new Connect(req.body);
    const savedConnection = await newConnection.save();
    res.status(201).json(savedConnection);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a connection by ID
exports.updateConnection = async (req, res) => {
  try {
    const updatedConnection = await Connect.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedConnection) return res.status(404).json({ message: 'Connection not found' });
    res.json(updatedConnection);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a connection by ID
exports.deleteConnection = async (req, res) => {
  try {
    const deletedConnection = await Connect.findByIdAndDelete(req.params.id);
    if (!deletedConnection) return res.status(404).json({ message: 'Connection not found' });
    res.json({ message: 'Connection deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
