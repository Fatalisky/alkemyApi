const router = require ('express').Router();

//const { Actor } = require ('../../db');
const Movie = require ('../../models/movies')
const Genre = require ('../../models/generos')
const Actor = require ('../../models/personajes');
const { personaje } = require('../../db');

//Mostrar todos las peliculas con sus actores.
router.get ('/', (req, res) => {
  Movie.findAll({
    include:{
      model: Actor,
      as: "actor",
      attributes:['nombre']
    },
    attributes:['imagen', 'título','fecha_creacion','calificacion']
  }).then(personajes=> res.json(personajes))
});

// CREATE /api/movie
router.post('/', (req, res) => {
  Movie.create({
      imagen: req.body.imagen,
      título: req.body.título,
      fecha_creacion: req.body.fecha_creacion,
      calificacion: req.body.calificacion,
      genero:{
        nombre: req.body.nombre
      }
      },{
        include: "genero"
      
  }).then(user => {
      res.json(personaje);
  }).catch(err => {
      res.json(err);
  })

});

module.exports = router;
