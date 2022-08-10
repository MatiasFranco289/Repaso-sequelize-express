const sequelize = require('sequelize');
const {Sequelize, Op} = require('sequelize');//Requiero sequelize, Op son operadores tales como WHERE AND OR (pero de sql)

//Esta es una forma de generar la conexion, indico que voy a usar postgress, que mi user es 'postgress' y mi pass 'lareputamadre1'
//Que voy a estar trabajando en el localhost y que el nombre de la db es henry_sequalize
/* const sequelize = new Sequelize('postgress://postgress:lareputamadre1@localhost.com:5432/henry_sequelize'); */

/* const db = new Sequelize('postgres://postgres:lareputamadre1@localhost:5432/henry_sequelize', {
  logging: console.log("Conexion a la db exitosa."),
}); */

//Esta es otra forma de conectarse, requiere el nombre de la db, user, password y un objeto con el host y dialect
const db = new Sequelize('henry_sequelize','postgres','lareputamadre1', {
    host: 'localhost',
    dialect: 'postgres',
    port: '5432',
    logging: console.log('La conexion se ha realizado con exito!')
})

const modelUser = require('./models/Player');//Importo el modelo de la tabla player, recorda que esto es una funcion que recibe la instancia actual de sequelize, osea la variable db
modelUser(db);//Llamo a la funcion y le paso la instancia actual de sequelize, cuando esta funcion se corra, agregara el modelo 'Player' a la instancia de sequelize(Ver Player.js)
console.log(db.models);//Aca se deberia ver el modelo que agregue

/* db.sync({force: true});//Esto hacer que se sincronicen todos los modelos con la base de datos, es decir que si los modelos de tablas que definiste y agregaste a la instancia
//de sequelice no existian, ahora van a ser creados en la db, el force: true hacer que si ya existian sean eliminados y vueltos a crear, tene cuidado con esta opcion
//Anyway es mejor hacer todo esto con se levante el server asi que me lo llevo para el archivo donde esta express */

module.exports = {
    ...db.models,//Exporto una copia de los modelos
    db: db,
    Op: Op
}