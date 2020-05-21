import express from 'express';
import getController from './src/js/getController.js';

const app = express();

const specials = ['flash', 'black clover', 'sheldon', 'westworld',
  'shokugeki no souma', 'one punch man', 'walking dead', 'rick and morty'];

app.get('/', function (req, res) {
  Promise.all([getController()])
    .then(arrs => arrs[0])
    .then(arrs =>
      res.send(
        `<html lang="pt-br">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>See updates</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css">
        </head>
  
        <body>
  
        <div style="display: inline-block; max-width: 100%; max-height: 99%; overflow: scroll;">
          <table class="bordered striped" style="width: 400px; border-right: 1px solid black;">
            <thead>
              <th>Anime</th>
            </thead>
            <tbody>
              ${arrs[0].map(anime => {
                if (specials.some(title => {
                  let regex = new RegExp(title, 'gi');
                  return regex.test(anime.title);
                })) {
                  return `
                              <tr><td>
                                <a target="_blank" href="${anime.link}"><font color=red>${anime.title}</font></a>
                              </td></tr>`
                }
                return `
                            <tr><td style="color: #000;">
                              <a target="_blank" href="${anime.link}"><font color=black>${anime.title}</font></a>
                            </td></tr>`
              }).join('')}
            </tbody>
          </table>
        </div>

        <div style="display: inline-block; max-width: 100%; max-height: 99%; overflow: scroll;">
          <table class="bordered striped" style="width: 400px; border-right: 1px solid black;">
            <thead>
              <th>Film</th>
            </thead>
            <tbody>
            ${arrs[1].map(film => {
              if (specials.some(title => {
                let regex = new RegExp(title, 'gi');
                return regex.test(film.title);
              })) {
                return `
                              <tr><td>
                                <a target="_blank" href="${film.link}"><font color=red>${film.title}</font></a>
                              </td></tr>`
              } else {
                return `
                            <tr><td style="color: #000;">
                              <a target="_blank" href="${film.link}"><font color=black>${film.title}</font></a>
                            </td></tr>`}
            }).join('')}
            </tbody>
          </table>
        </div>
        </body>
        </html>`)
    )
});

app.listen(2020, function () {
  console.log(`Servidor rodando na porta 2020`);
});