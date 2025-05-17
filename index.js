const express = require('express');
const app = express();
const cors = require('cors')
const path = require('path');
const fs = require('fs');
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

const menuItems = require('./data/menu_items.json')

app.get('/', (req, res) => {
  res.status(200).render('index', {menuItems: menuItems})
})


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});