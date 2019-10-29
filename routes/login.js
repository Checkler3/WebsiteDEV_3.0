const express = require('express');
const router = express.Router();

// Route to display index page
router.get('/', async (req, res) => {
	res.render('login/index', { title: 'Login' });
});

router.get('/register', async (req, res) => {
	res.send('Register');
});

module.exports = router;
