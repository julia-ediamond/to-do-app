const express = require('express')
const router = express.Router()
const db = require('../database')

//get homepage
//get index route
router.get("/", (req, res) => {
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
router.post("/", async (req, res) => {
    try {
        const { task } = req.body;
        const { rows } = await db.query
    }
})
module.export = router;