const Consultation = require('../models/Consultation');

exports.createConsultation = async (req, res) => {
  try {
    const consultation = new Consultation(req.body);
    await consultation.save();
    res.status(201).send(consultation);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getConsultations = async (req, res) => {
  try {
    const consultations = await Consultation.find({ patientId: req.params.patientId });
    res.status(200).send(consultations);
  } catch (error) {
    res.status(404).send(error);
  }
};
