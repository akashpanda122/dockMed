const Prescription = require('../models/Prescription');

exports.createPrescription = async (req, res) => {
  try {
    const prescription = new Prescription(req.body);
    await prescription.save();
    res.status(201).send(prescription);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getPrescriptions = async (req, res) => {
  try {
    const prescriptions = await Prescription.find({ patientId: req.params.patientId });
    res.status(200).send(prescriptions);
  } catch (error) {
    res.status(404).send(error);
  }
};
