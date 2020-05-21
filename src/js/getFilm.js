import rp from 'request-promise';
import cheerio from 'cheerio';

export default function getList(page) {
  return new Promise((resolve, reject) => {

    const options = {
      url: `https://comandotorrents.org/page/${page}/`,
      json: true
    }

    rp(options)
      .then(body => {
        let $ = cheerio.load(body);
        let rows = [];
        $('article').each(function () {
          let row = {
            title: $(this).find('h2.entry-title a').text(),
            link: $(this).find('h2.entry-title a').attr('href')
          };
          rows.push(row);
        });
        resolve(rows);
      }).catch(err => reject(err));
  })
}


