const app = require('./config/express')();
const port = app.get('port');
const offerRoutes = require('./routes/Offer');

app.use('/Offers', offerRoutes);

// RODANDO NOSSA APLICAÇÃO NA PORTA SETADA
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});