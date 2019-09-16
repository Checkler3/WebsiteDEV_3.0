const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');

const app = express();

// Bodyparser middleware
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

// app.get('/', function(req, res) {
// 	res.render('Hello World');
// });

app.use('/', indexRouter);
app.use('/about', aboutRouter);

// Start server
const port = process.env.port || 4000;
app.listen(port, () => console.log(`Server started on port ${port}`));
