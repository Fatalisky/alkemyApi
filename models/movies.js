module.exports = (sequelize, type) => {
  return sequelize.define ('movie', {
    imgen: type.STRING,
    título: { 
      type: type.STRING,
      primaryKey:true,
      isAlphaNumeric:true,
      required:true,
      allowNull:true
    },
    fecha_creacion: type.DATE,
    calificacion: type.INTEGER
  })
}


