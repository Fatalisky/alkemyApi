module.exports = (sequelize, type) => {
  return sequelize.define ('genero', {
    Nombre: {
      type: type.STRING,
      isAlphaNumeric:true,
      required:true,
      allowNull:true
    },
    imgen: type.STRING

  })
}
 
// const { Model, type } = require('sequelize');
// const sequelize = require('../db');

// class generos extends Model {}
// generos.init({
//   Nombre: type.STRING,
//   imgen: type.BLOB,
// }, {
//     sequelize,
//     modelName: "genero",
//     timestamps: false
// });

//module.exports = generos;
