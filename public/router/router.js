import getController from '../js/getController.js';
import { template, table, trLink } from '../templates/index.js';

export default app => {

  app.get('/', function (req, res) {

    Promise.all([getController()])
      .then(arrs => arrs[0])
      .then(arrs => [
        table('Animes', arrs.animes.map(anime =>
            trLink(anime.title, anime.link)).join('')),
        table('Films', arrs.films.map(film =>
            trLink(film.title, film.link)).join(''))
      ])
      .then(arrs =>
        res.send(template(arrs.map(arr => `<div>${arr}</div>`).join('')))
      );
  })

};