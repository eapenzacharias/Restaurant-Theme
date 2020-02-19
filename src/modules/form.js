function makeForm(formID, formAr) {
  const form = document.createElement('form');
  form.setAttribute('id', formID);
  formAr.forEach(item => {
    const group = document.createElement('div');
    group.setAttribute('class', 'input-group mb-3');

    const prependDiv = document.createElement('div');
    prependDiv.setAttribute('class', 'input-group-prepend');

    const span = document.createElement('span');
    span.setAttribute('class', 'input-group-text');
    span.setAttribute('id', `${item[1]}-input`);
    const name = item[0];
    span.innerHTML = name;
    const textF = document.createElement('input');
    textF.outerHTML = `<input type="${item[2]}" class="form-control" aria-describedby="${item[1]}-input">`;

    prependDiv.appendChild(span);
    group.appendChild(prependDiv);
    group.appendChild(textF);
    form.appendChild(group);
  });
  const btn = document.createElement('button');
  btn.setAttribute('class', 'btn btn-outline-secondary');
  btn.innerHTML = 'Submit';
  form.appendChild(btn);
  return form;
}

export default makeForm;