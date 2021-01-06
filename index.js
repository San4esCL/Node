const express = require('express');
const app = express();
const port = 3030;
const colors = require('colors');
app.use(express.json());

app.listen(port, function(){
    console.log(`Server ON http://localhost:${port}`.rainbow)
})

app.get('/', function(req, res){
    res.send('<h1>Hola Mundo!</h1>');
})

app.get('/user', (req, res) =>{
    res.json({
        prueba: 'RES / GET',
        usuario: 'Cameron',
        edad: 14
    });
    console.log(req.body);
})

app.post('/user/:id', (req, res) =>{
    res.send('wena csm, paso POST');
    console.log(req.params);
    console.log(req.body);
    console.log('Auto usuario: ', req.body['Auto']);
    console.log('Año AUTO: ', req.body['AÑO']);
    
})

app.put('/user/:id', (req, res) =>{
    res.send(`respuesta PUT EXITOSA\n Actualizando usuario ${req.params['id']}`)
    console.log(req.body);
    
})

app.delete('/user/:id', (req, res) =>{
    body.send(`<h1>Eliminando usuario ${req.params['id']}</h1>`)
})