const express = require('express');
const data = require('./data')

const api = express();
const HOST = 'localhost';
const PORT = 5000;


api.get('/', (req, res) => {
    res.status(200).json(data);
})

// api.listen(PORT, () => console.log(`I hear whispers on ${HOST}:${PORT}!`));
api.listen(PORT);