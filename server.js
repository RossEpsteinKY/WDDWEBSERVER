const http = require('http');
const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('/', (req,res) =>{
    console.log(__dirname);
    res.sendFile(__dirname + '/home.html');
});

http.createServer(app).listen(8085, ()=>
    {
        console.log("Server running on 8085")
    }
);
