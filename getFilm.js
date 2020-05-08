import rp from 'request-promise';
import cheerio from 'cheerio';

function getList(page) {
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

export default async function getFilm() {
  try {
    const arr = await Promise.all([getList(1), getList(2), getList(3), getList(4), getList(5)]);
    let result = arr.reduce((acc, curr) => acc.concat(curr), []);
    return result;
  }
  catch (err) {
    return console.log(err);
  }
}
