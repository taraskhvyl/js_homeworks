function prepend(container, newElement) {
  var currentElement = document.querySelector(container),
      content = newElement +  currentElement.innerHTML;
  currentElement.innerHTML = content;
}

prepend('#container', '<p>Привет,</p>');