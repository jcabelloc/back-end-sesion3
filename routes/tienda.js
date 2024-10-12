const path = require('path');
const express = require('express');

const raizDir = require('../utils/path');


const router = express.Router();

router.get('/', (req, res, next) => {
    // res.send('<h1>Hola desde Express</h1>');
    // res.sendFile(path.join(__dirname, '..', 'views', 'tienda.html'));
    res.sendFile(path.join(raizDir, 'views', 'tienda.html'));
});

module.exports = router;