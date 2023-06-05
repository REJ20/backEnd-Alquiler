const express = require('express');
const morgan = require('morgan');

const rentRoutes = require('./routes/client.route');

const App = express();

App.use(morgan('dev'));
App.use(express.json());

App.use(rentRoutes);
App.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
});

App.listen(4000);
console.log('Sever on Connetion');

