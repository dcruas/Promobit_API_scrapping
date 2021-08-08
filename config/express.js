const express    = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

module.exports = () => {
  const app = express();

  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT);

  app.use(bodyParser.json());
 

  return app;
};