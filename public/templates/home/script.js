const formatSearch = str => str.replace(/ {1,}/g, '%20').replace(/(^%20|%20$)/g, '');

function search(e, id, url) {
  e.preventDefault();
  let searchInput = document.querySelector(id).value;
  window.open(
    `${url}${formatSearch(searchInput)}`,
    '_blank');
}