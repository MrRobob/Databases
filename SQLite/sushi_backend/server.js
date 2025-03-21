const express = require('express');
const sqlite3 = require('sqlite3')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8080;

const db = new sqlite3.Database('./restaurant.db');
app.use(cors());
app.use(bodyParser.json());


db.run("CREATE TABLE IF NOT EXISTS menu (id INTEGER PRIMARY KEY AUTOINCREMENT, dish_name TEXT)", [], () => {
    db.run("INSERT INTO menu (dish_name) VALUES ('Pizza')");
    db.run("INSERT INTO menu (dish_name) VALUES ('Döner')");
    db.run("INSERT INTO menu (dish_name) VALUES ('Salat')");
});

app.get('/', (req, res) => {
    res.send('request received');
});

app.get('/Pizza', (req, res) => {
    res.send('Pizza ist lecker!');
});

app.get('/Döner', (req, res) => {
    res.send('Döner macht schöner!');
});

app.get('/Salat', (req, res) => {
    res.send('Du findest keine Freunde mit Salat!');
});

app.get('/dishes', (req, res) => {
    db.all("SELECT * FROM menu", [], (err, rows) => {
        res.json(rows);
    });
});

  app.listen(port, () => {
    console.log(`Server läuft unter http://localhost:${port}`);
});