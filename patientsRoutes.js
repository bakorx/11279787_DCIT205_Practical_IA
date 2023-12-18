   
     const express = require('express');
     const router = express.Router();
     const patientController = require('../controllers/patientController');

  
     router.post('/patients', patientController.registerPatient);

  
     router.post('/encounters', patientController.startEncounter);

   
     router.post('/vitals', patientController.submitVitals);

     module.exports = router;
     
