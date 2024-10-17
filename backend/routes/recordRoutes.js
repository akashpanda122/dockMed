const express = require('express');
const recordController = require('../controllers/recordController');
const router = express.Router();

router.post('/records', recordController.createMedicalRecord);
router.get('/records/:patientId', recordController.getMedicalRecords);

module.exports = router;
