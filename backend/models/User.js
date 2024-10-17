const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  walletAddress: String,
  email: String,
  role: { type: String, enum: ['Patient', 'Doctor', 'HealthcareProvider'] },
});

module.exports = mongoose.model('User', UserSchema);
