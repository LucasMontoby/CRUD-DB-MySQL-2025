const express = require('express');
const multer = require('multer');

const router = express.Router();


router.get('/', (req, res) =>{
    res.render('home')
});

module.exports = router;