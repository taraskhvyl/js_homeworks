function prepend(container, newElement) {
	var currentElement = container,
  		content = newElement +  document.querySelector(currentElement).innerHTML;
  		
  	document.querySelector(currentElement).innerHTML = content;
}

prepend('#container', '<p>Привет,</p>');