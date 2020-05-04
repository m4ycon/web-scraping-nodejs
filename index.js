import rp from 'request-promise';
import cheerio from 'cheerio'; // Basically jQuery for node.js

function getAnime(page) {
  return new Promise((resolve, reject) => {

    const options = {
      url: `https://www.superanimes.org/ultimos-adicionados?valor=video-lancamento&pagina=${page}`,
      json: true
    }

    rp(options)
      .then(body => {
        let $ = cheerio.load(body);
        let rows = [];
        $('article').each(function () {
          let row = {
            title: $(this).find('div.grid_box[title]').attr('title'),
            link: $(this).find('div div a').attr('href')
          };
          rows.push(row);
        });
        resolve(rows);
      })
      .catch(err => reject(err));

  })
}

const arr = Promise.all([getAnime(1), getAnime(2), getAnime(3)])
  .then(arr => arr[0].concat(arr[1], arr[2]));