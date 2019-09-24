const express = require('express');
const router = express.Router();

// Route to display index page
router.get('/', async (req, res) => {
	res.render('redirect/404', { title: '404 - Page Not Found' });
});

module.exports = router;
