const express = require('express');
const axios = require('axios');
const cors = require('cors'); 

const app = express();
const port = 8081;

app.use(cors());

app.get('/get-dishes', async (req, res) => {
    try {
        const response = await axios.get('http://localhost:8080/dishes');
        res.json(response.data);
    } catch (error) {
        console.error('Fehler beim Abrufen der Daten:', error.message);
        res.status(500).send('Fehler beim Abrufen der Daten');
    }
});

app.listen(port, () => {
    console.log(`Server 2 läuft auf http://localhost:${port}`);
});