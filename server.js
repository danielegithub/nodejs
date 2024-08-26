const express = require('express');
const app = express();
const port = 8080; // Puoi cambiare questa porta se necessario

// Dati fittizi dell'utente
const user = {
  id: 1,
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'user'
};

// Middleware per gestire il JSON
app.use(express.json());

// Route per ottenere i dettagli dell'utente
app.get('/user', (req, res) => {
  res.json(user);
});

// Avvia il server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
