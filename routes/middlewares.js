const checkToken = (req, res, next) => {
const jwt = require ('jwt-simple')
const moment = require ('moment')
if(req.headers['usuario-token']) {
  return res.json ({ error: 'Incluid el User Token en el header'})
}

const userToken = req.headers['usuario-token']
let playload = {};

try {
  playload = jwt.decode(userToken, 'favorite secret');
}catch (err){
  return res.json({error: 'Token incorrecto'})
}

if(playload.expiredAt < moment().unix()){
  return res.json({ error: 'Token expired'})
}

req.userId = playload.userId;


  next();
}

module.exports = {
  checkToken: checkToken   
}