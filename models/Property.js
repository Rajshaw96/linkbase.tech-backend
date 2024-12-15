const mongoose = require('mongoose');

const SplashPageSchema = new mongoose.Schema({
  propertyName: String,
  propertyLogo: String,
  propertyBackgroundImg: String,
  propertySplashPageTitle: String,
  propertySplashPageDescription: String,
}, {
  versionKey: false // You should be aware of the outcome after set to false
});

module.exports = mongoose.model('Property', SplashPageSchema);
