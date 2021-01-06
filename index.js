const express = require('express');
const app = express();
const port = 3030;
const colors = require('colors');


app.get('/', function(req, res){
    res.send('<h1>Hola Mundo!</h1>');
})

app.listen(port, function(){
    console.log(`Server ON http://localhost:${port}`.rainbow)
})

app.get('/user', function(req, res){
    res.send('Hola gente');
})