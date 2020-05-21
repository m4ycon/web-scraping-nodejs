import rp from 'request-promise';
import cheerio from 'cheerio';

export default function getList(page) {
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