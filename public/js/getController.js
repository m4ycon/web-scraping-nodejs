import { getFilm, getAnime } from './getTemplates.js';

export default async function joinArrs() {
  try {
    const animes = await Promise.all([
      getAnime(1),
      getAnime(2),
      getAnime(3)
    ]);

    const films = await Promise.all([
      getFilm(1),
      getFilm(2),
      getFilm(3),
      getFilm(4),
      getFilm(5)
    ]);

    let result = {
      animes: animes.reduce((acc, curr) => acc.concat(curr), []),
      films: films.reduce((acc, curr) => acc.concat(curr), [])
    };

    return result;

  } catch (err) {
    return console.log(err);
  }
}