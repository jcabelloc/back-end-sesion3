const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log('Estamos en el MiddleWare');
    next();
});

app.use((req, res, next) => {
    console.log('Estamos en el segundo MiddleWare');
    res.send('<h1>Hola desde Express</h1>');
});

app.listen(3000, () => {
    console.log("Se ha iniciado el servidor express.js")
});