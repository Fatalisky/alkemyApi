const router = require ('express').Router();

//const { Actor } = require ('../../db');
const Movie = require ('../../models/movies')
const Genre = require ('../../models/generos')
const Actor = require ('../../models/personajes')
const { personaje } = require('../../db')

//Mostrar todos los actores
router.get ('/', (req, res) => {
  Actor.findAll({
    include:[{
      model: Movie,
      attributes:['título']
    }],
    attributes:['imagen', 'nombre','edad','peso','historia']
  }).then(personajes=> res.json(personajes))
});

// CREATE /api/actor
router.post('/', (req, res) => {
  Actor.create({
      imagen: req.body.imagen,
      nombre: req.body.nombre,
      edad: req.body.edad,
      peso: req.body.peso,
      historia: req.body.historia,
      participacion:{
        título: req.body.título
      }
      },{
        include: "participacion"
      
  }).then(user => {
      res.json(personaje);
  }).catch(err => {
      res.json(err);
  })
});


// UPDATE Personaje/:id
router.patch('/:id', (req, res) => {
  Post.update({
    imagen: req.body.imagen,
    nombre: req.body.nombre,
    edad: req.body.edad,
    peso: req.body.peso,
    historia: req.body.historia,
    participacion:{
      título: req.body.título
    }
    }, {
      where: {
          id: req.params.id
      }
  }).then(result => {
      res.json(result);
  });
});

// DELETE Personaje:id
router.delete('/:id', (req, res) => {
  Post.destroy({
      where: {
          id: req.params.id
      }
  }).then(result => {
      res.json(result);
  })
});





module.exports = router;
