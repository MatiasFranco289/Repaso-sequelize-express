//Esto es un modulo que contien el modelo de una tabla
//Neceisto requerie DataTypes para trabajar pero luego exporto una funcion que va a recibir la instancia de sequelize que creamos en db.js al conectarnos a la db
const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Character', {//Al correrse sequelize.define lo que estamos haciendo es agregar todo esto al objeto sequelize
        code: {
          type: DataTypes.STRING(5),
          primaryKey: true,
          allowNull: false
        },
        name: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false
        },
        age: {
          type: DataTypes.INTEGER
        },
        race: {
          type: DataTypes.ENUM('Human', 'Elf', 'Machine', 'Demon', 'Animal', 'Other'),
          defaultValue: 'Other'
        },
        hp: {
          type: DataTypes.FLOAT,
          allowNull: false
        },
        mana: {
          type: DataTypes.FLOAT,
          allowNull: false
        },
        date_added: {
          type: DataTypes.DATEONLY,
          defaultValue: new Date()
        }
      },{
        timestamps: false
      })
}