import getList from './getList.js';

export const getFilm = page => getList(
  'https://comandotorrents.org/page/',
  page,
  obj => {
    return {
      title: obj.find('h2.entry-title a').text(),
      link: obj.find('h2.entry-title a').attr('href')
    }
  }
);

export const getAnime = page => getList(
  'https://www.superanimes.org/ultimos-adicionados?valor=video-lancamento&pagina=',
  page,
  obj => {
    return {
      title: obj.find('div.grid_box[title]').attr('title'),
      link: obj.find('div div a').attr('href')
    }
  }
);