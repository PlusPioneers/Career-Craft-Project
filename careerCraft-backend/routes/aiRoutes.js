const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Create a new user
router.post('/users', async (req, res) => {
    const { name, email, grade, stream } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO users (name, email, grade, stream) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, email, grade, stream]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error creating user');
    }
});

// Generate and save recommendations
router.post('/recommendations', async (req, res) => {
    const { user_id, stream } = req.body;
    const courses = JSON.stringify(['AI Basics', 'Data Science', 'Cybersecurity']); // AI logic here

    try {
        const result = await pool.query(
            'INSERT INTO recommendations (user_id, stream, courses) VALUES ($1, $2, $3) RETURNING *',
            [user_id, stream, courses]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error creating recommendation');
    }
});

// Get recommendations for a user
router.get('/recommendations/:user_id', async (req, res) => {
    const { user_id } = req.params;
    try {
        const result = await pool.query(
            'SELECT * FROM recommendations WHERE user_id = $1',
            [user_id]
        );
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Error fetching recommendations');
    }
});

module.exports = router;
