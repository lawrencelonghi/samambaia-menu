const express = require('express');
const app = express();
const cors = require('cors')
const path = require('path');
const fs = require('fs');
const PORT = 3000;


// Middleware
app.use(express.json());
 app.use(cors());
 app.use(express.static(path.join(__dirname, 'public')));

const menuData = require('./menuData')

// Routes
app.get('/menu', (req, res) => {
  res.status(200).json(menuData);
})



// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});