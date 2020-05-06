import express from 'express';
import getAnime from './getAnime.js';

const app = express();

app.get('/', function (req, res) {
  getAnime().then(arr => {
    res.send(
      `<html lang="pt-br">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>See updates</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css">
      </head>

      <body>
        <table class="bordered striped" style="width: 300px; border-right: 1px solid black">
          <thead>
            <th>Animes</th>
          </thead>
          <tbody>
            ${arr.map(elem => `<tr><td>${elem.title.link(elem.link)}</td></tr>`).join('')}
          </tbody>
        </table>
      </body>
      </html>`); 
  });
});

app.listen(3000, function () {
  console.log(`Servidor rodando na porta 3000`);
});