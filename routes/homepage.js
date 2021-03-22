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
        .then((lists) => {
            console.log(list);
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
router.post("/task", (req, res) => {
    let task = req.body.task
    db.none('INSERT INTO lists (user_id, task, date) VALUES ($1, $2, $3)' /*returning **/
        [req.body.userId, req.body.task, req.body.date]) 
        .then((lists) => {
            console.log(lists)
            return res.send()
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

        db.none('DELETE FROM lists WHERE id = $1 AND user_id = $2', [req.query.id, req.query.userId])
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