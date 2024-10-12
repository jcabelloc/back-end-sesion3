const express = require('express');

const router = express.Router();

router.get('/crear-producto', (req, res, next) => {
    res.send('<form action="/productos" method="POST"><input type="text" name="nombreproducto"><button type="submit">Crear</button></form>');
});

router.post('/productos', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
});

module.exports = router;