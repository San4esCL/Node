// IMPORTES DE LIBRERIAS
const express = require('express');
const app = express();
const colors = require('colors');
const morgan = require('morgan');

// Settings
app.set('appName', 'Vicente Express Tutorial');
app.set('port', 3030);
app.set('view engine', 'ejs')

//MIDDLEWARE
function logger(req, res, next){
    console.log(`Route Recived: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}
app.use(logger);
app.use(express.json());
app.use(express.static('public'));
app.use(morgan('dev'));


//Levantar servidor
app.listen(app.get('port'), function(){
    console.log(('Server ON http://localhost:'.rainbow),app.get('port'))
})

/*
>>> RUTAS <<<
*/
app.all('/user', (req, res, next) =>{
    console.log('Por aqui pasó');
    next();
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