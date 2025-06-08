require('dotenv').config();
const http = require('http');
const express = require('express');
const morgan = require('morgan');
const apiRoutes = require('./routes');
const connectDB = require('./config/database');
const startCpuMonitoring = require('./helpers/cpuMonitor.helper');

// Initial app and port
const app = express();
const PORT = process.env.PORT || 3000;

// connect database
connectDB();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api logger
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use('/api/v1', apiRoutes);

// error handler
app.use((error, req, res, next) => {
    console.log(error.stack);
    return res.status(500).send({ error });
});

// create and start the server
const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`Server listening on the port:${PORT}`);
    startCpuMonitoring();
});
