const express = require('express');
const app = express();
const cors = require('cors')
const path = require('path');
const fs = require('fs');
const PORT = 3000;



app.use(express.json());
 app.use(cors());
 app.use(express.static(path.join(__dirname, 'public')));

const menuItems = require('./menuData')

app.get('/menu', (req, res) => {
  res.status(200).json(menuItems);
})



// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});