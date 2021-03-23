const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const expressLayouts = require('express-ejs-layouts')
const db = require('./database')
const path = require("path");
const PORT = 3004;

// routes
const homepageRouter = require('./routes/homepage')
const archivedRouter = require('./routes/archived')
const errorRouter = require('./routes/error')


//use routes
app.use('/', homepageRouter)
app.use('/archived', archivedRouter)
app.use('*', errorRouter)


app.set('view engine', 'ejs');
app.use(express.json())

//require('express-router')();
app.use(express.urlencoded({ extended: true }))



// static files
app.use(express.static('public'))
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())
app.use(expressLayouts)
app.use(morgan("dev"))









app.listen(PORT, () => {
    console.log(`server is listening on localhost${PORT}`);
});