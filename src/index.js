import './assets/css/style.css';
import navBar from './modules/navbar';
import home from './modules/home';

const content = document.getElementById('content');

const nav = document.createElement('nav');
nav.setAttribute('class', 'navbar navbar-expand-lg navbar-light bg-light flex-column');

const container = document.createElement('div');
container.setAttribute('class', 'container');
container.setAttribute('id', 'container');

content.appendChild(nav);
navBar(nav);

content.appendChild(container);
home();