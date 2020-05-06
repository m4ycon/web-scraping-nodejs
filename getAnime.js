import rp from 'request-promise';
import cheerio from 'cheerio';

function getList(page) {
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
      }).catch(err => reject(err));
  })
}

export default async function getAnime() {
  try {
    const arr = await Promise.all([getList(1), getList(2), getList(3)]);
    let result = arr.reduce((acc, curr) => acc.concat(curr), []);
    return result;
  }
  catch (err) {
    return console.log(err);
  }
}
