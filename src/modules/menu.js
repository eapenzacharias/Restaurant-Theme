import setPage from "./setpage";

async function fetchData() {
  const response = await fetch('./data/menu.json', { mode: 'cors' });
  const data = await response.json();
  return data;
}

function printMenu(type) {
  const head = document.createElement('h2');
  const icon = document.createElement('i');
  icon.setAttribute('class', `${type.icon}`);
  head.innerHTML = `${type.type}`;
  head.appendChild(icon);
  return head;
}

async function menu() {
  const container = setPage('menu-link');
  container.classList.add('menu');
  let menu = await fetchData();
  menu.data.forEach(element => {
    container.appendChild(printMenu(element));
  });
}

export default menu;