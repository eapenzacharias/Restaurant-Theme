import './assets/css/style.css';
import navBar from './modules/navbar';
import footer from './modules/footer';
import home from './modules/home';

const content = document.getElementById('content');

const nav = document.createElement('nav');
nav.setAttribute('class', 'navbar navbar-expand-lg navbar-light bg-light flex-column header');

const container = document.createElement('div');
container.setAttribute('class', 'container flex-grow-1');
container.setAttribute('id', 'container');

content.appendChild(nav);
navBar(nav);
content.appendChild(container);
content.appendChild(footer());

home();