const express = require('express');
const router = express.Router();

// Route to display index page
router.get('/', async (req, res) => {
	res.render('about/index', { title: 'Corey Heckler - About' });
});

module.exports = router;
