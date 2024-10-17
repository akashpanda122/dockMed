const MedicalRecord = require('../models/MedicalRecord');

exports.createMedicalRecord = async (req, res) => {
  try {
    const medicalRecord = new MedicalRecord(req.body);
    await medicalRecord.save();
    res.status(201).send(medicalRecord);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getMedicalRecords = async (req, res) => {
  try {
    const records = await MedicalRecord.find({ patientId: req.params.patientId });
    res.status(200).send(records);
  } catch (error) {
    res.status(404).send(error);
  }
};
