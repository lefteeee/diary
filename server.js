const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static('client'));
app.use(express.json());

app.set('view engine', 'ejs');

app.set('views', path.join('client', 'views'));

app.use(express.static(path.join('client')));

app.get('/', (req, res) => {
    res.render('main', { title: 'main', message: 'welcome'});
});

app.get('/diary', (req, res) => {
    res.render('diary', { title: 'diary'});
});

app.get('/board', (req,res) => {
    res.render('board', { title: 'board'});
});

app.get('/about', (req,res) => {
    res.render('about', { title: 'about'});
});

app.get('/write', (req,res) => {
    res.render('write', { title: 'write'});
});

app.listen(PORT, () => console.log(`Server running at https://localhost:${PORT}`));