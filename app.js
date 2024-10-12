const express = require("express");

const app = express();

app.use('/crear-producto', (req, res, next) => {
    console.log('Estamos en el MiddleWare');
    res.send('<h1>Vamos a crear un producto</h1>');
});

app.use('/', (req, res, next) => {
    console.log('Estamos en el segundo MiddleWare');
    res.send('<h1>Hola desde Express</h1>');
});

app.listen(3000, () => {
    console.log("Se ha iniciado el servidor express.js")
});