const express = require('express');
const bodyParser = require ('body-parser');

const apiRouter = require('./routes/api')
/*aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa*/


/*dddddddddddddddddddddddddddddddddddddddddddddd*/

const app = express();
const sequelize = require('./db')
//require ('./relacion')
require ('./db');     

app.use(bodyParser.json())
app.use(bodyParser.urlencoded( { extended: true}))

//Setting
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded( { extended: false}))

//Rutas
// app.get ('/', function(req, res){
//   res.json("Bienvenue");
// });
app.use('/api', apiRouter);

// app.use('/api/personajes', require('./routes/characters'));
// app.use('/api/movies', require('./routes/movies'));
// app.use('/api/generos', require('./routes/generos'));

// Arrancamos el servidor
app.listen(PORT, function () {
  console.log(`La app ha arrancado en http://localhost:${PORT}`)});

  // Conectase a la base de datos
  // Force true: DROP TABLES
//   sequelize.sync({ force: true }).then(() => {
//       console.log("Nos hemos conectado a la base de datos");
//   }).catch(error => {
//       console.log('Se ha producido un error', error);
//   })

// });





// const app = express()


// 
// //require('./relacion')

// app.use(bodyParser.json())


// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))