const express = require('express');

const app = express();

app.get('/', (request, response) => {
  // return response.send('Hello Word');
  return response.json({
    evento: 'Semana OmniStack',
    aluno: "Eduardo developer"
  });
});

app.listen(3333);