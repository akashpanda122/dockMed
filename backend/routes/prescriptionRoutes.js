const express = require('express');
const prescriptionController = require('../controllers/prescriptionController');
const router = express.Router();

router.post('/prescriptions', prescriptionController.createPrescription);
router.get('/prescriptions/:patientId', prescriptionController.getPrescriptions);

module.exports = router;
