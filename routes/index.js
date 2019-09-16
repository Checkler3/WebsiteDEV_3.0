const express = require('express');
const router = express.Router();

// Route to display index page
router.get('/', async (req, res) => {
	res.render('index', { title: 'Corey Heckler - Home' });
});

module.exports = router;
