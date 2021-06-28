const Sequelize = require ('sequelize')

const PersonajeModel = require ('./models/personajes')
const MovieModel = require ('./models/movies')
const GeneroModel = require ('./models/generos')
const UserModel = require ('./models/users')

const sequelize = new Sequelize('jTcNbqCDRY', 'jTcNbqCDRY', '6LFiCLvCtu', {
  host: 'remotemysql.com',
  dialect: 'mysql'
})

const personaje = PersonajeModel(sequelize, Sequelize)
const movie = MovieModel(sequelize, Sequelize)
const genero = GeneroModel(sequelize, Sequelize)
const user = UserModel(sequelize, Sequelize)

//associatiations

personaje.belongsToMany(movie, { through: "movie_personajes" });
movie.belongsToMany(personaje, { through: "movie_personajes" });


movie.belongsToMany(genero, { through: "movie_generos" });
genero.belongsToMany(movie, { through: "movie_generos" });

sequelize.sync ({ force: false})
  .then(() => {
    console.log('Tablas sincronizadasss');
  })

  module.exports = {
    personaje,
    movie,
    genero,
    user
  }


module.exports = sequelize;