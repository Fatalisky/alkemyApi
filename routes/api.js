const router = require ('express').Router();

const middleware = require ('./middlewares')

const apiPersonajesRouter = require('./api/characters');
const apiMoviesRouter = require ('./api/movies')
const apiGenerosRouter = require ('./api/generos')
const apiUserRouter = require ('./api/users')


router.use ('/characters', apiPersonajesRouter); 
router.use ('/movies', apiMoviesRouter);
router.use ('/generos', apiGenerosRouter);
router.use ('/users', apiUserRouter);

module.exports = router;