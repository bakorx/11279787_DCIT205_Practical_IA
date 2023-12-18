const express = require('express');
const router = express.Router();
const { createPatient, updatePatient } = require('../controllers/patientController');


router.post('/', createPatient);


router.put('/:patientId', updatePatient);

module.exports = router;

