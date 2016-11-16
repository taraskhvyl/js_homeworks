function scanDOM() {
  
  console.log('Тэгов div:' + searchTag('div'));
  console.log('Тэгов a:' + searchTag('a'));
  console.log('Тэгов span:' + searchTag('span'));
  console.log('Текстовых узлов: ' + searchNode());
  console.log('Элементов с классом c1:' + searchTag('.c1'));
  console.log('Элементов с классом c2:' + searchTag('.c2'));
  
  function searchTag(tag) {
    var allTags = document.querySelectorAll(tag);
    return allTags.length;
  }
  
  function searchNode() {
    var allElements = document.getElementsByTagName("*"),
      nodeText = 0;
    for(var i = 0; i < allElements.length; i++) {
      
      if (allElements[i].nodeType === Node.TEXT_NODE) {
        nodeText =+ 1;
      }
    }
    return nodeText;
  }
}

scanDOM();