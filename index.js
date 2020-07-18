const express = require('express');


const app = express();

app.get('/', (req, res) => {
    res.json({
        message:'You are visiting root'
    });
});

app.get('/login', (req, res) => {
    res.json({
        message:'You are visiting login'
    });
});

app.get('/signup', (req, res) => {
    res.json({
        message:'You are visiting signup'
    });
});

app.get('/logout', (req, res) => {
    res.json({
        message:'You are logged out'
    });
});


app.listen(8001, () => {
    console.log('up and running on 8001')
});