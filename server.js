import express from 'express';
const server = express();
const port = 3000;

server.get('/', (req, res) => {
  res.send('Hola Mundo')
});

server.get('/usuarios', (req, res) => {
  res.send('<h1>Usuarios</h1>')
});

server.get('*', (req, res) => {
  res.status(400).send('ERROR')
});

server.listen(port, () => console.log(`Servidor ejecutandose en puerto ${port}`));

server.on('error', error => console.log(`Error al iniciar el servidor: ${error}`))