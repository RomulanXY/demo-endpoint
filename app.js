const express = require('express');
const data = require('./data')

const api = express();
const HOST = 'https://localhost';
const PORT = process.env.PORT || 5000;


api.get('/', (req, res) => {
    res.send('Go to /me path');
})
api.get('/me', (req, res) => {
    res.status(200).json(data);
})

// api.listen(PORT, () => console.log(`I hear whispers on ${HOST}:${PORT}!`));
api.listen(PORT);