const express = require('express');

const app = express();
app.get('/', (req, res) => res.json({msg: "Welcome to the Student Report Card API..."}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`SERVER started on PORT ${PORT}`));