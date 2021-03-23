const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/archived', (req, res) => {
    res.render('pages/archived')
});



module.exports = router;

