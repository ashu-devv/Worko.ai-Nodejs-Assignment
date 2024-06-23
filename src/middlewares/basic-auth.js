const { StatusCodes } = require('http-status-codes');
const {serverConfig} = require('../config');
const basicAuth = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  console.log('Authorization Header:', authHeader); 

  if (!authHeader || authHeader !== serverConfig.SECRET_KEY) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Unauthorized' });
  }

  next();
};

module.exports = basicAuth;
