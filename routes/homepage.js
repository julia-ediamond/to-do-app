const express = require('express');
const router = express.Router();
const db = require('../database');

//get homepage route

router.get('/tasks', (req, res) => {
    res.redirect('/')
});

//get all tasks
router.get('/', (req, res) => {
    db.any("SELECT task, TO_CHAR(date, 'DD Month') date FROM lists")
        .then((lists) => {
            console.log(lists);
                res.render('pages/homepage', {
                lists: lists
                })
        })
        .catch((err) => {
            console.error(err)
            res.render('pages/error', {
                err: err
            })
        })

});


//post task route
router.post('/', (req, res) => {
    
    db.query("INSERT INTO lists (task, date) VALUES ($1, $2) RETURNING task, date", 
        [req.body.task, req.body.date]) 
        .then((lists) => {
            console.log(lists)
            return res.redirect('/?message=New%20task%20created.')
        })
        .catch((err) => {
            console.log(err)
            res.render('pages/error', {
                err: err
			})
		})
})


//delete task route 

router.post('/delete', (req, res) => {

    if (req.query.taskId) {

        db.none('DELETE FROM lists WHERE id = $1', [req.query.id])
            .then((lists) => {
                res.redirect('/?message=Task%deleted.')
            })
            .catch((err) => {
                res.render('pages/error', {
                    title: 'Error. Please try again.',
                    err: err
                })
            })
    } else {
        res.render('pages/error', {
            title: 'Error',
            err: {
                message: 'There is no task ID found.'
            }
        })
    }
}) 
       
        

module.exports = router;