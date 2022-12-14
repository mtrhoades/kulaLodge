// dependencies
const express = require('express'); // use express framwork.
const cors = require('cors'); // for allowing requests to be made from one website to another in browser.


// configuration
const app = express(); // use app variable for express framework configuration
require('dotenv').config(); // to use .env file for configuration of port
const PORT = process.env.PORT


// middleware
app.use(cors());
app.use(express.json()); // req.body on client side


// root route
app.get('/', (req, res) => {
    res.send('Ayyyeeee KULA LODGE WHAT UP!')
});


// controller route
app.use('/users', require('./controllers/users'));
app.use('/orderingGuide', require('./controllers/orderingGuide'));


// catch all route (error page)
app.get('*', (req, res) => {
    res.send('ERROR PAGE 404 NOT FOUND!')
});


// server listening
app.listen(PORT, () => {
    console.log('Whats goody!? we up in here on PORT', PORT)
});
