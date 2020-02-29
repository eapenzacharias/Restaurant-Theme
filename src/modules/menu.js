import setPage from './setpage';

async function fetchData() {
  const response = await fetch('./data/menu.json');
  const data = await response.json();
  return data;
}

function listItems(type, menuCol) {
  type.items.forEach(i => {
    const itemRow = document.createElement('div');
    itemRow.setAttribute('class', 'row');
    const nameCol = document.createElement('div');
    nameCol.setAttribute('class', 'col-10 item');
    const nam = document.createElement('h3');
    nam.innerHTML = i.name;
    const decp = document.createElement('p');
    decp.innerHTML = i.dec;
    nameCol.appendChild(nam);
    nameCol.appendChild(decp);

    const priceCol = document.createElement('div');
    priceCol.setAttribute('class', 'col-2 price');
    priceCol.innerHTML = i.price;

    itemRow.appendChild(nameCol);
    itemRow.appendChild(priceCol);
    menuCol.appendChild(itemRow);
  });
  return menuCol;
}

function printMenu(type) {
  const menuRow = document.createElement('div');
  menuRow.setAttribute('class', 'row menu-type');
  const menuCol = document.createElement('div');
  menuCol.setAttribute('class', 'col-12');

  const head = document.createElement('h2');
  const icon = document.createElement('i');
  icon.setAttribute('class', `${type.icon}`);
  head.innerHTML = `${type.type}`;
  head.appendChild(icon);

  menuCol.appendChild(head);

  menuRow.appendChild(listItems(type, menuCol));
  return menuRow;
}

async function menu() {
  const container = setPage('menu-link');
  container.setAttribute('class', 'container menu');

  const head = document.createElement('h1');
  head.innerHTML = 'Menu';
  container.appendChild(head);

  const menu = await fetchData();
  menu.data.forEach(element => {
    container.appendChild(printMenu(element));
  });
}

export default menu;