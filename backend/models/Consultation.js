const mongoose = require('mongoose');

const ConsultationSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: Date,
  status: String,
});

module.exports = mongoose.model('Consultation', ConsultationSchema);
