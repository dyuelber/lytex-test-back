require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL+'/'+process.env.MONGO_DATABASE);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error);
});

database.on('connected', () => {
    console.log('Database connected');
});

const app = express();

const routerApi = require('./routes/api');

app.use(express.json());

app.use('/api', routerApi);

app.listen(3000, () => {
    console.log('Server on port 3000');
});
