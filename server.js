const students = require('./routes/students');
const reportCard = require('./routes/report-card');

const connectDB = require('./config/db');
const express = require('express');

const app = express();

// Connect Database
connectDB();

app.use(express.json({ extended: false })); // now can accept body data

app.get('/', (req, res) => res.json({msg: "Welcome to the Student Report Card API..."}));

// Define Routes
app.use('/api/students', students);
app.use('/api/report-card', reportCard);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`SERVER started on PORT ${PORT}`));