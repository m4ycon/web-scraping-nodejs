const formatSearch = str => str.replace(/ {1,}/g, '%20').replace(/(^%20|%20$)/g, '');

function searchfilm(e) {
  e.preventDefault();
  let searchInput = document.querySelector('#searchFilm').value;
  window.open(
    `https://comandotorrents.org/?s=${formatSearch(searchInput)}`,
    '_blank');
}

function searchanime(e) {
  e.preventDefault();
  let searchInput = document.querySelector('#searchAnime').value;
  window.open(
    `https://www.superanimes.org/busca?parametro=${formatSearch(searchInput)}`,
    '_blank');
}