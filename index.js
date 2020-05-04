const rp = require('request-promise');
const cheerio = require('cheerio'); // Basically jQuery for node.js
const Table = require('cli-table');

var table = new Table({
  head: ['Title', 'Link'],
  colWidths: [30, 150]
})

const options = {
  url: 'https://www.superanimes.org/ultimos-adicionados?valor=video-lancamento',
  json: true
}


rp(options)
  .then(body => {
    let $ = cheerio.load(body);
    $('article div.grid_box[title]').each(() => {
      console.log($(this).attr('title'));
    });

    $('article div div a').each(() => {
      console.log($(this).attr('href'));
    });

  })
  .catch(err => console.log(err));

console.log(table.toString());