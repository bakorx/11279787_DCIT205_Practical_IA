const mongoose = require('mongoose');


const patientSchema = new mongoose.Schema({
  patientID: String,
  surname: String,
  otherNames: String,
  gender: String,
  phoneNumber: String,
  residentialAddress: String,
  emergencyName: String,
  emergencyContact: String,
  relationshipWithPatient: String,
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;

