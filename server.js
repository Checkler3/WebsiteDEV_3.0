const express = require('express');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const indexRouter = require('./routes/index');
const aboutRouter = require('./routes/about');
const projectRouter = require('./routes/projects');
const errorRouter = require('./routes/error');
const loginRouter = require('./routes/login');

// Initialize App
const app = express();

// Bodyparser middleware
app.use(bodyParser.json());

// Initialize ejs as view engine
// Set 'public' folder for use in layouts
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(express.static('public'));

// Initialize Routers
app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/projects', projectRouter);
app.use('/login', loginRouter);

// 404 Route
// !!====!! Must be last router listed !!====!!
app.use('*', errorRouter);

// Start server
const port = process.env.port || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
