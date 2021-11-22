const students = require('./routes/students');
const reportCard = require('./routes/report-card');

const connectDB = require('./config/db');
const express = require('express');
const path = require('path');

const app = express();

// Connect Database
connectDB();

app.use(express.json({ extended: false })); // now can accept body data

app.get('/', (req, res) => {
    // res.json({msg: "Welcome to the Student Report Card API..."})
  }
);

// Define Routes
app.use('/api/students', students);
app.use('/api/report-card', reportCard);

// Serve Static assets in production
if (process.env.NODE.ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`SERVER started on PORT ${PORT}`));