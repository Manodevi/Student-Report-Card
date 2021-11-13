const students = require('./routes/students');
const reportCard = require('./routes/report-card');

const connectDB = require('./config/db');
const express = require('express');

const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) => res.json({msg: "Welcome to the Student Report Card API..."}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`SERVER started on PORT ${PORT}`));

// Define Routes
app.use('api/students', students);
app.use('api/report-card', reportCard);