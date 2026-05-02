const mongoose = require('mongoose');

const LoginAttemptSchema = new mongoose.Schema({
  email: { type: String, required: true, index: true },
  success: { type: Boolean, required: true },
  reason: { type: String },          // e.g. 'not_found', 'bad_password', 'missing_fields', 'rate_limited'
  autoRegistered: { type: Boolean, default: false },
  ip: { type: String },
  userAgent: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('LoginAttempt', LoginAttemptSchema);