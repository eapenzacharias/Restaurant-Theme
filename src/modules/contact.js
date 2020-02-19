import setPage from "./setpage";

function contact() {
  const container = setPage('contact-link');
  container.setAttribute('class', 'container reserve');
  const row = document.createElement('div');
  row.setAttribute('class', 'row');

  const colOne = document.createElement('div');
  colOne.setAttribute('class', 'd-none d-lg-block d-xl-block col-lg-4 image');
  colOne.style.backgroundImage = "url('./img/contact.jpg')";
  const colTwo = document.createElement('div');
  colTwo.setAttribute('class', 'col-12 col-lg-4 content');
  const colThr = document.createElement('div');
  colThr.setAttribute('class', 'col-12 col-lg-4 form');

  colTwo.innerHTML = 'two';
  colThr.innerHTML = 'Three'

  row.appendChild(colOne);
  row.appendChild(colTwo);
  row.appendChild(colThr);
  container.appendChild(row);
}

export default contact;