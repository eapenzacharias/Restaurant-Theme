import setPage from './setpage';
import makeForm from './form';

function reserve() {
  const container = setPage('reserve-link');
  container.setAttribute('class', 'container reserve');
  const row = document.createElement('div');
  row.setAttribute('class', 'row');

  const colOne = document.createElement('div');
  colOne.setAttribute('class', 'd-none d-lg-block d-xl-block col-lg-7 image');
  colOne.style.backgroundImage = "url('./img/tables.jpg')";

  const colTwo = document.createElement('div');
  colTwo.setAttribute('class', 'col-12 col-lg-5');

  const textA = document.createElement('p');
  textA.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis leo eget risus ultrices, nec euismod dui dapibus. Pellentesque luctus non urna dapibus, commodo laoreet urna.'

  const formAr = [
    ['Name', 'name', 'text'],
    ['Phone', 'phone', 'tel'],
    ['Email', 'mail', 'email'],
    ['Seats', 'seats', 'number'],
    ['Date', 'date', 'date'],
    ['Time', 'time', 'time']
  ];

  const head = document.createElement('h1');
  head.innerHTML = 'Reserve your Seat!'

  const form = makeForm('reserve-form', formAr);

  colTwo.appendChild(head);
  colTwo.appendChild(textA);
  colTwo.appendChild(form);
  row.appendChild(colOne);
  row.appendChild(colTwo);
  container.appendChild(row);
}

export default reserve;