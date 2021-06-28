const router = require ('express').Router();

//const { Actor } = require ('../../db');
const Movie = require ('../../models/movies')
const Genre = require ('../../models/generos')
const Actor = require ('../../models/personajes')
const { personaje } = require('../../db')

router.get('/', (req, res) => {
  Genre.findAll({
      include: {
          model: Movie,
          as: "tipo",
          attributes: ['nombre']
      }
  }).then(generos => res.json(generos));
});

module.exports = router;

