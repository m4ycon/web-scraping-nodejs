import rp from 'request-promise';
import cheerio from 'cheerio'; // Basically jQuery for node.js
import Table from 'cli-table';

var table = new Table({
  head: ['Title', 'Link'],
  colWidths: [40, 150]
})

const options = {
  url: 'https://www.superanimes.org/ultimos-adicionados?valor=video-lancamento',
  json: true
}


rp(options)
  .then(body => {
    let $ = cheerio.load(body);
    
    $('article').each(function() {
      let row = [];
      row.push($(this).find('div.grid_box[title]').attr('title').toString());
      row.push($(this).find('div div a').attr('href').toString());
      table.push(row);
    });

    console.log(table.toString());
  })
  .catch(err => console.log(err));
