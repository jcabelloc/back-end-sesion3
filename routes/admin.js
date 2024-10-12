const express = require('express');

const router = express.Router();

// /admin/crear-producto
router.get('/crear-producto', (req, res, next) => {
    res.send('<form action="/admin/productos" method="POST"><input type="text" name="nombreproducto"><button type="submit">Crear</button></form>');
});

// /admin/productos
router.post('/productos', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
});

module.exports = router;