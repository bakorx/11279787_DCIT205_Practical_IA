const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


dotenv.config();


const app = express();
app.use(express.json());


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const patientRoutes = require('./routes/patientRoutes');
app.use('/api/patients', patientRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

