import setPage from './setpage';
import makeForm from './form';

function makeColOne() {
  const colOne = document.createElement('div');
  colOne.setAttribute('class', 'd-none d-lg-block d-xl-block col-lg-5 image');
  colOne.style.backgroundImage = "url('./img/contact.jpg')";
  return colOne;
}

function contact() {
  const container = setPage('contact-link');
  container.setAttribute('class', 'container contact');
  const row = document.createElement('div');
  row.setAttribute('class', 'row');

  const colTwo = document.createElement('div');
  colTwo.setAttribute('class', 'col-12 col-lg-7 content');

  const textA = document.createElement('p');
  textA.innerHTML = 'Lorem ipsum dolor sit amet, consectetur eget risus adipiscing elit. Suspendisse lobortis leo eget risus ultrices, nec euismod dui dapibus.';

  const addr = document.createElement('p');
  addr.setAttribute('class', 'address');
  addr.innerHTML = 'Address</br>High Street - 321</br>Hannover, 30123';

  const head = document.createElement('h1');

  head.innerHTML = 'Contact Us';

  const formAr = [
    ['Name', 'name', 'text'],
    ['Phone', 'phone', 'tel'],
    ['Email', 'mail', 'email'],
    ['Message', 'message', 'text'],
  ];

  const form = makeForm('reserve-form', formAr);

  colTwo.append(head, textA, addr, form);

  row.append(makeColOne(), colTwo);
  container.appendChild(row);
}

export default contact;