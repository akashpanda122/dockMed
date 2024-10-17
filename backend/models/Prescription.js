const mongoose = require('mongoose');

const PrescriptionSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  medication: String,
  dosage: String,
  duration: String,
  attestationIds: [String], // Array of attestation IDs (omit for now)
});

module.exports = mongoose.model('Prescription', PrescriptionSchema);
