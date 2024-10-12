const path = require('path');
const express = require('express');

const raizDir = require('../utils/path');


const router = express.Router();

// /admin/crear-producto
router.get('/crear-producto', (req, res, next) => {
    // res.send('<form action="/admin/productos" method="POST"><input type="text" name="nombreproducto"><button type="submit">Crear</button></form>');
    //res.sendFile(path.join(__dirname, '..', 'views', 'crear-producto.html'));
    res.sendFile(path.join(raizDir, 'views', 'crear-producto.html'));

});

// /admin/productos
router.post('/crear-producto', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
});

module.exports = router;