// require express and set as variable to use for routes:
const items = require('express').Router();
// grab models:
const pool = require('../model/db');


// routes:

// READ ALL ROUTE (GET)
items.get('/', async (req, res) => {
    try {
        const allItems = await pool.query(
            "SELECT * FROM orderingGuide"
        );
        res.json(allItems.rows);
    } catch (err) {
        res.status(404).send('Error 404 Page Not Found!')
    }
})

// READ SINGLE ROUTE (GET)

// CREATE ROUTE (POST)

// UPDATE ROUTE (PUT)

// DELETE ROUTE (DELETE)


module.exports = items;