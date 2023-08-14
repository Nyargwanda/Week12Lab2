const express = require('express'); //require modules
const app = express(); // create express app

const names = ['John', 'Chris', 'Mercy']; //define list of names

//Greetings route
app.get('/greeting/', function (req, res) {
  res.send('<h1>Hello Stranger!</h1>');
});

app.get('/greeting/:name', (req, res) => {
  const requestedName = req.params.name;

//check if the requested name exists in the names array
const greeting = names.includes(requestedName)
  ? `Hello, ${requestedName}! Its great to see you`
  : 'Hello, Stranger! What\'s up?';

  res.send(`<h1>${greeting}</h1>!`);
});

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});