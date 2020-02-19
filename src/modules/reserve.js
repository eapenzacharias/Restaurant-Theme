import setPage from "./setpage";

function reserve() {
  const container = setPage('reserve-link');
  container.setAttribute('class', 'container reserve');
  const row = document.createElement('div');
  row.setAttribute('class', 'row');

  const colOne = document.createElement('div');
  colOne.setAttribute('class', 'd-none d-lg-block d-xl-block col-lg-7 image');
  colOne.style.backgroundImage = "url('./img/tables.jpg')";
  const colTwo = document.createElement('div');
  colTwo.setAttribute('class', 'col-12 col-lg-5 form');

  colTwo.innerHTML = 'two';

  row.appendChild(colOne);
  row.appendChild(colTwo);
  container.appendChild(row);
}

export default reserve;