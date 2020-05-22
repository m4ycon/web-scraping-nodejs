import getArrsAnime from './getAnime.js';
import getArrsFilm from './getFilm.js';

export default async function joinArrs() {
  try {
    const animes = await Promise.all([
      getArrsAnime(1),
      getArrsAnime(2),
      getArrsAnime(3)
    ]);

    const films = await Promise.all([
      getArrsFilm(1),
      getArrsFilm(2),
      getArrsFilm(3),
      getArrsFilm(4),
      getArrsFilm(5)
    ]);

    let result ={
      animes: animes.reduce((acc, curr) => acc.concat(curr), []),
      films: films.reduce((acc, curr) => acc.concat(curr), [])
    };

    return result;

  } catch (err) {
    return console.log(err);
  }
}