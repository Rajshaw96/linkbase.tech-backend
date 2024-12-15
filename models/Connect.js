const mongoose = require('mongoose');

const ConnectSchema = new mongoose.Schema({
  id: String,
  UserFullName: String,
  UserPhoneNo: String,
  UserEmailId: String,
});

module.exports = mongoose.model('Connect', ConnectSchema);
