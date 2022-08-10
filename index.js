//Esto va a ser mi rest api usando express
const {db} = require('./db');

const express = require('express');
const home = require('./routes/home');

let server = express();
server.use(express.json());
server.use('/home', home);



server.listen(3000, ()=> {//Levanto el server
    db.sync({force: true});//Aca sincronizo los modelos con la db(Mas info en db.js)
    console.log('El servidor esta escuchando en el puerto 3000');
});