const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const expressLayouts = require('express-ejs-layouts')
const db = require('./database')
const path = require("path");
const routes = require("./routes");
app.set('view engine', 'ejs');
const PORT = 3004;
app.use(express.json())
app.use(express.urlencoded({ extended: true }))



// static files
app.use(express.static('public'))
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())
app.use(expressLayouts)
app.use(morgan("dev"))

// routes
const homepageRouter = require('./routes/homepage')

app.use('/', homepageRouter)


//get index route
app.get("/", (req, res) => {
    db.any('SELECT * FROM lists;')
        .then((list) => {
            console.log(list)
            res.render('pages/index', {
                lists: list
            })
        })
        .catch((err) => {
            console.error(err)
            res.render('pages/error', {
                err: err
            })
        })

});


//post route
app.post("/", async (req, res) => {
    try {
        const { task } = req.body;
        const { rows } = await db.query
    }
})



app.listen(PORT, () => {
    console.log(`server is listening on localhost${PORT}`);
});