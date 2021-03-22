const express = require('express');
const router = express.Router();
const db = require('../database');

//get homepage route

router.get('/', (req, res) => {
    res.render('pages/homepage')
});

//get all tasks
router.get("/tasks", (req, res) => {
    db.any('SELECT user_id, task, date FROM lists')
        .then((list) => {
            console.log("Finding tasks works")
                res.render('pages/homepage', {
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
router.post("/task", (req, res) => {
    db.none('INSERT INTO lists (user_id, task, date) VALUES ($1, $2, $3)'
        [req.body.userId, req.body.task, req.body.date])
        .then(() => {
            console.log('it works')
            return res.end()
        })
        .catch((err) => {
            console.log(err)
            res.render('pages/error', {
                err: err
			})
		})
})
module.exports = router;