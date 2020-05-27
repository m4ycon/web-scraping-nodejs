import rp from 'request-promise';
import cheerio from 'cheerio';

export default async function getList(url, page, rules) {
  return await new Promise((resolve, reject) => {

    const options = {
      url: url + page,
      json: true
    }

    rp(options)
      .then(body => {
        let $ = cheerio.load(body);
        let rows = [];
        $('article').each(function () {
          let row = rules($(this));
          if (row.title != undefined && row.link != undefined) {
            rows.push(row);
          }
        });
        resolve(rows);
      }).catch(err => reject(err));
  })
}