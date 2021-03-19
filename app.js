const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const expressLayouts = require('express-ejs-layouts')
const db = require('./database')
const path = require("path");
app.set('view engine', 'ejs');
const PORT = 3004;
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// static files
app.use(express.static('public'))
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())
app.use(expressLayouts)

//get index route
app.get("/", (req, res) => {
    res.render("pages/index")
});


app.listen(PORT, () => {
    console.log(`server is listening on localhost${PORT}`);
});