function prepend(container, newElement) {
  var content = newElement +  document.querySelector(container).innerHTML;
  document.querySelector(container).innerHTML = content;
}

prepend('#container', '<p>Привет,</p>');