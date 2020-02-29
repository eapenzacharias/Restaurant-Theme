import home from './home';
import menu from './menu';
import reserve from './reserve';
import contact from './contact';

function brand() {
  const brand = document.createElement('a');
  brand.setAttribute('class', 'navbar-brand align-self-center m-0 pb-3 position-md-absloute pb-md-0');

  const logo = document.createElement('img');
  logo.setAttribute('class', 'd-inline-block align-top');
  logo.src = './img/logo.png';
  brand.appendChild(logo);
  return brand;
}

function makeNavLinks(navAr, navHome) {
  const navLinks = document.createElement('ul');
  navLinks.setAttribute('class', 'nav justify-content-around');
  navAr.forEach((item) => {
    const navItem = document.createElement('li');
    navItem.setAttribute('class', 'nav-item');
    if (item === navHome) {
      item.setAttribute('class', 'nav-link active');
    } else {
      item.setAttribute('class', 'nav-link');
    }
    navItem.appendChild(item);
    navLinks.appendChild(navItem);
  });
  return navLinks;
}

function navBar(nav) {
  nav.appendChild(brand());

  const navHome = document.createElement('a');
  navHome.setAttribute('id', 'home-link');
  navHome.innerHTML = 'HOME';
  navHome.onclick = () => { home(); };
  const navMenu = document.createElement('a');
  navMenu.setAttribute('id', 'menu-link');
  navMenu.innerHTML = 'MENU';
  navMenu.onclick = () => { menu(); };
  const navRese = document.createElement('a');
  navRese.setAttribute('id', 'reserve-link');
  navRese.innerHTML = 'RESERVE';
  navRese.onclick = () => { reserve(); };
  const navCont = document.createElement('a');
  navCont.setAttribute('id', 'contact-link');
  navCont.innerHTML = 'CONTACT';
  navCont.onclick = () => { contact(); };

  const navAr = [navHome, navMenu, navRese, navCont];

  nav.appendChild(makeNavLinks(navAr, navHome));
}

export default navBar;