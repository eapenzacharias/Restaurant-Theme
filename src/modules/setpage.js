function setPage(linkId) {
  const container = document.getElementById('container');
  container.innerHTML = '';
  const linkActive = document.getElementsByClassName('nav-link active');
  linkActive[0].setAttribute('class', 'nav-link');
  document.getElementById(linkId).classList.add('active');
  return container;
}

export default setPage;