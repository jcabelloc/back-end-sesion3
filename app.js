const express = require('express');
const bodyParser = require('body-parser')

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));


app.use('/crear-producto', (req, res, next) => {
    console.log('Estamos en el MiddleWare');
    res.send('<form action="/productos" method="POST"><input type="text" name="nombreproducto"><button type="submit">Crear</button></form>');
});

app.use('/productos', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
});

app.use('/', (req, res, next) => {
    console.log('Estamos en el segundo MiddleWare');
    res.send('<h1>Hola desde Express</h1>');
});

app.listen(3000, () => {
    console.log("Se ha iniciado el servidor express.js")
});