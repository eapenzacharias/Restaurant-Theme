import setPage from "./setpage";

function home() {
  const container = setPage('home-link');

  const mainRow = document.createElement('div');
  mainRow.setAttribute('class', 'row home');

  const colLargeOne = document.createElement('div');
  colLargeOne.setAttribute('class', 'col col-12 col-lg-6 large-box');

  const colLargeTwo = document.createElement('div');
  colLargeTwo.setAttribute('class', 'col col-12 col-lg-6');

  const colSmTop = document.createElement('div');
  colSmTop.setAttribute('class', 'col col-12 small-box');

  const colSmBtm = document.createElement('div');
  colSmBtm.setAttribute('class', 'col col-12 small-box');

  mainRow.appendChild(colLargeOne);
  colLargeTwo.appendChild(colSmTop);
  colLargeTwo.appendChild(colSmBtm);
  mainRow.appendChild(colLargeTwo);
  container.appendChild(mainRow);
}

export default home;