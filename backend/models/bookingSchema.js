const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  skillCenter: { type: String, required: true },
  course: { type: String, required: true },
  type: { type: String, enum: ['online', 'offline'], required: true }, // Use lowercase enum values
  message: { type: String }
});

module.exports = mongoose.model('Booking', bookingSchema);
