import './assets/css/style.css';
import navBar from './modules/navbar';
import home from './modules/home';

const content = document.getElementById('content');

const nav = document.createElement('nav');
nav.setAttribute('class', 'navbar navbar-expand-lg navbar-light bg-light fixed-top flex-column');

const container = document.createElement('div');
container.setAttribute('class', 'container');

content.appendChild(nav);
navBar(nav);

content.appendChild(container);
home();