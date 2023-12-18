
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const patientRoutes = require('./routes/patientRoutes');

dotenv.config();

mongoose.connect('mongodb+srv://asnkwamebakor:<password>@bakorx.mddlz3w.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(express.json());

app.use('/api', patientRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

