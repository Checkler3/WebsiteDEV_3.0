const express = require('express');
const router = express.Router();

// Route to display index page
router.get('/', async (req, res) => {
	res.render('projects/index', { title: 'Projects' });
});

router.get('/iss-tracker', async (req, res) => {
	res.render('projects/iss-tracker', { title: 'Projects - ISS Tracker' });
});

module.exports = router;
