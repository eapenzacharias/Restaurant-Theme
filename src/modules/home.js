import setPage from './setpage';

function home() {
  const container = setPage('home-link');
  container.setAttribute('class', 'container-fluid');
  const mainRow = document.createElement('div');
  mainRow.setAttribute('class', 'row home');

  const colLargeOne = document.createElement('div');
  colLargeOne.setAttribute('class', 'col col-12 col-lg-6 large-box');
  colLargeOne.style.backgroundImage = "url('./img/about.jpg')";

  const head = document.createElement('h1');
  head.innerHTML = 'Forkful';
  const about = document.createElement('p');
  about.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lobortis leo eget risus ultrices, nec euismod dui dapibus. Pellentesque eu nisl at ipsum sollicitudin suscipit.</br>Nullam ante urna, luctus non urna dapibus, commodo laoreet urna. Praesent in vehicula sem, vel posuere nunc.</br></br>Duis id nisi sed lectus tempor euismod non sed magna. Sed gravida est et nisi rutrum mollis. Donec sit amet nunc nunc. Praesent ut vestibulum justo, vitae rhoncus odio.  Pellentesque eu nisl at ipsum sollicitudin suscipit.</br></br>Maecenas vestibulum erat non dui vulputate auctor.';
  const image = new Image(236, 101);
  image.src = './img/sign.png';
  colLargeOne.appendChild(head);
  colLargeOne.appendChild(about);
  colLargeOne.appendChild(image);

  const colLargeTwo = document.createElement('div');
  colLargeTwo.setAttribute('class', 'col col-12 col-lg-6');


  const colSmTop = document.createElement('div');
  colSmTop.setAttribute('class', 'col col-12 small-box');
  colSmTop.style.backgroundImage = "url('./img/cusine.jpg')";
  const cusine = document.createElement('h2');
  cusine.innerHTML = 'Cusine';
  const cusineD = document.createElement('p');
  cusineD.innerHTML = '<ul><li>Italian</li><li>Chinese</li><li>French</li><li>Mexican</li></ul>';
  colSmTop.appendChild(cusine);
  colSmTop.appendChild(cusineD);

  const colSmBtm = document.createElement('div');
  colSmBtm.setAttribute('class', 'col col-12 small-box');
  colSmBtm.style.backgroundImage = "url('./img/hours.jpg')";
  const openHrs = document.createElement('h2');
  openHrs.innerHTML = 'Open Hours';
  const openHrsD = document.createElement('p');
  openHrsD.innerHTML = '<ul><li>Mon - Fri  11.00AM to 11.00PM</li><li>Sat  3.00PM to 12.00PM</li><li>Sun  3.00PM to 10.00PM</li></ul>';
  colSmBtm.appendChild(openHrs);
  colSmBtm.appendChild(openHrsD);

  mainRow.appendChild(colLargeOne);
  colLargeTwo.appendChild(colSmTop);
  colLargeTwo.appendChild(colSmBtm);
  mainRow.appendChild(colLargeTwo);
  container.appendChild(mainRow);
}

export default home;