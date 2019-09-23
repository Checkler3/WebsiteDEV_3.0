const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const projectRouter = require('./routes/projects');

// Initialize App
const app = express();

// Bodyparser middleware
app.use(bodyParser.json());

// Initialize ejs as view engine
// Set 'public' folder for use in layouts
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

// Initialize Routers
app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/projects', projectRouter);

// Start server
const port = process.env.port || 4000;
app.listen(port, () => console.log(`Server started on port ${port}`));
