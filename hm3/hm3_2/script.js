function deleteTextNodes(container) {
  var children = document.querySelector(container).childNodes;
  console.log(children.length);
  for (var i = 0; i < children.length; i++) {
      if(children[i].nodeType === Node.TEXT_NODE) {
        document.querySelector(container).removeChild(children[i]);
      }
  }
}

deleteTextNodes('#container');