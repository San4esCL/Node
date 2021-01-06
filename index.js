const express = require('express');
const app = express();
const port = 3030;
const colors = require('colors');

//MIDDLEWARE
function logger(req, res, next){
    console.log(`Route Recived: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}
app.use(logger);
app.use(express.json());
//Levantar servidor
app.listen(port, function(){
    console.log(`Server ON http://localhost:${port}`.rainbow)
})

/*
>>> RUTAS <<<
*/
app.all('/user', (req, res, next) =>{
    console.log('Por aqui pasó');
    next();
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