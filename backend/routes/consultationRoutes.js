const express = require('express');
const consultationController = require('../controllers/consultationController');
const router = express.Router();

router.post('/consultations', consultationController.createConsultation);
router.get('/consultations/:patientId', consultationController.getConsultations);

module.exports = router;
