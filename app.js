const express = require('express');
const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin')
const tiendaRoutes = require('./routes/tienda')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(tiendaRoutes);


app.listen(3000);