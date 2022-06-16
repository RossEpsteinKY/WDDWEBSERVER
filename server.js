const http = require('http');
const express = require('express');
const app = express();


app.use(express.static(__dirname));

app.get('/', (req,res) =>{
    console.log(__dirname);
    console.log("home was clicked");
    res.sendFile(__dirname + '/home.html');
});


app.get('/about', (req,res) =>{
    console.log("about was clicked");
    res.sendFile(__dirname + '/about.html');
});

app.get('/portfolio', (req,res) =>{
    console.log("portfolio was clicked");
    res.sendFile(__dirname + '/portfolio.html');
});


http.createServer(app).listen(8085, ()=>{
    console.log('SERVER STARTED ON PORT 8085');
});
