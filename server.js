import express from 'express';
import path from 'path';
import getController from './public/js/getController.js';

const __dirname = path.resolve();

const app = express();

app.use('/static', express.static(__dirname + '/public'));

app.get('/', function (req, res) {

  const table = (title, content) => `
    <table class="table table-dark table-hover" cellpadding="0" cellspacing="0">
      <thead>
        <tr>
          <th scope="col">${title}</th>
        </tr>
      </thead>
      <tbody>
        ${content}
      </tbody>
    </table>`;

  Promise.all([getController()])
    .then(arrs => arrs[0])
    .then(arrs => [
      table('Animes', arrs.animes.map(anime =>
        `<tr><td><a href=${anime.link} target="_blank">${anime.title}</a></td></tr>`).join('')),
      table('Films', arrs.films.map(film =>
        `<tr><td><a href=${film.link} target="_blank">${film.title}</a></td></tr>`).join(''))
    ])
    .then(arrs =>
      res.send(
        `<!doctype html>
        <html lang="pt-br">
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <title>See updates</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
            
            <style>
              div {
                width: 400px;
                height: 100vh;
                overflow: auto;
              }
              a {
                color: white;
                transition: all 300ms;
              }
              a:hover {
                color: lightblue;
                text-decoration: none;
              }

              div::-webkit-scrollbar {
                width: 10px;
              }

              div::-webkit-scrollbar-track {
                background: black;
              }

              div::-webkit-scrollbar-thumb {
                background: dimgrey;
                border-radius: 5px;
              }
            </style>

          </head>
          <body>
            <section style="display: flex;">

              <div>${arrs[0]}</div>

              <div>${arrs[1]}</div>
            </section>

            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
          </body>
        </html>`
      )
    )
})

app.listen(2020, function () {
  console.log(`Servidor rodando na porta 2020`);
});