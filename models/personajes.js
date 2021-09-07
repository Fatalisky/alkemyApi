// const { Model, types } = require('sequelize');
//  const sequelize = require ('../db')

module.exports = (sequelize, type) => {
  return sequelize.define ('personaje', {
    id:{ 
      type: type.UUID,
      primaryKey:true
    },
    imgen: type.STRING,
    Nombre: {
      type: type.STRING,
      isAlphaNumeric:true,
      required:true,
      allowNull:true
    },
    edad: type.INTEGER,
    peso: type.STRING,
    historia: type.STRING,

  })
}
