import style from './style.js';

const specials = ['flash', 'black clover', 'sheldon', 'westworld',
  'shokugeki no souma', 'one punch man', 'walking dead', 'rick and morty'];

export const table = (title, content) => `
  <table class="table table-dark table-hover" cellpadding="0" cellspacing="0">
    <thead>
      <tr>
        <th scope="col">${title}</th>
      </tr>
    </thead>
    <tbody>
      ${content}
    </tbody>
  </table>`;

export const trLink = (title, link) => {
  if (specials.some(elem => {
    let regex = new RegExp(`${elem}`, 'gi');
    return regex.test(title);
  })) {
    return `<tr><td>
      <a href=${link} target="_blank" style="color: lawngreen;">${title}</a>
    </td></tr>`;
  }
  
  return `<tr><td>
    <a href=${link} target="_blank">${title}</a>
  </td></tr>`;

};

export const template = tables => `<!doctype html>
  <html lang="pt-br">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>See updates</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    
    <style> ${style} </style>
  </head>
  <body>

    <section>
      ${tables}

      <div>
        <form class="form-inline" onsubmit="search(event, '#searchFilm', 'https://comandotorrents.org/?s=')">
          <input id="searchFilm" class="form-control mr-sm-2" type="search" placeholder="Search Film" aria-label="Search">
          <button type="submit" class="btn btn-primary">Go there</button>
        </form>

        <form class="form-inline" onsubmit="search(event, '#searchAnime', 'https://www.superanimes.org/busca?parametro=')">
          <input id="searchAnime" class="form-control mr-sm-2" type="search" placeholder="Search Anime" aria-label="Search">
          <button type="submit" class="btn btn-primary">Go there</button>
        </form>

        <form class="form-inline" onsubmit="search(event, '#searchSubt', 'https://legendei.to/?s=')">
          <input id="searchSubt" class="form-control mr-sm-2" type="search" placeholder="Search Subtitles" aria-label="Search">
          <button type="submit" class="btn btn-primary">Go there</button>
        </form>
      </div>
      
    </section>

    <script src="/static/templates/home/script.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </body>
  </html>`;

