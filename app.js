const express = require("express");

const app = express();

app.get("/",  (req, res) => {
    res.send("Hola Mundo!");
});

app.get("/saludos",  (req, res) => {
    res.send("Pagina de Saludo!");
});

app.listen(3000, () => {
    console.log("Se ha iniciado el servidor express.js")
});