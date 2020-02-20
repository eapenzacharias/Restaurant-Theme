function footer() {
  const bar = document.createElement('ul');
  bar.setAttribute('class', 'nav justify-content-center footer');

  const item = document.createElement('li');
  item.setAttribute('class', 'nav-item');

  const link = document.createElement('a');
  link.setAttribute('class', 'nav-link');
  link.innerHTML = 'crafted by eapenzac ';

  const icon = document.createElement('i');
  icon.setAttribute('class', 'fab fa-github-square');

  link.appendChild(icon);
  link.href = 'https://github.com/eapenzacharias';

  item.appendChild(link);
  bar.appendChild(item);

  return bar;
}

export default footer;