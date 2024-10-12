const express = require('express');
const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin')
const tiendaRoutes = require('./routes/tienda')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);
app.use(tiendaRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>PAGINA NO ENCONTRADA</h1>');
})

app.listen(3000);