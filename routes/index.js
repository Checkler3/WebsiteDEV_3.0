const express = require('express');
const router = express.Router();

// Route to display index page
router.get('/', async (req, res) => {
	try {
		res.render('index', { title: 'Corey Heckler - Home' });
	} catch (error) {
		console.log(error)
	}
	
});

module.exports = router;
