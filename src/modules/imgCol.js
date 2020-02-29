function makeCol(cssClass, imgUrl) {
  const col = document.createElement('div');
  col.setAttribute('class', cssClass);
  col.style.backgroundImage = `url('${imgUrl}')`;
  return col;
}

export default makeCol;