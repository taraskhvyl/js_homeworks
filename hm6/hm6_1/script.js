window.onload = init();

function init() {
  let cookies = listCookies();
  container.innerHTML = cookies;
}


// создаем таблицу с куками
function listCookies() {
    let theCookies = document.cookie.split(';'),
    		content = '<table><thead><td>№</td><td>name</td><td>value</td><td>delete</td></thead>';
    for (let i = 1 ; i <= theCookies.length; i++) {
    	let addArray = theCookies[i-1].split('=');
        content += `<tr><td>${i}</td><td>${addArray[0]}</td><td>${addArray[1]}</td><td><button data-cookie="${addArray[0]}" class="deleteCookie">delete</button></td></tr>`;
    }
    content += '</table>';
    return content;
}

document.body.addEventListener('click', function(event) {
  let target = event.target;
  if(target.classList.contains('deleteCookie')) {
    let target = event.target;
    
    if (target.hasAttribute("data-cookie")) {
      dataAttr = target.dataset.cookie;
      confirmDelete(dataAttr);
    }
  }
})

// вызов конфирма
function confirmDelete(cookie) {
	let question = confirm("Вы на самом деле хотите удалить cookie " + cookie);
  if(question) {
  	deleteCookie(cookie);
    alert('Deleted');
    listCookies();
  } else {
  	alert('Вы перехотели');
  }
}

// удаляем куки по имени
function deleteCookie (cookieName) {
  let cookieDate = new Date ( );
  cookieDate.setTime ( cookieDate.getTime() - 1 );
  document.cookie = cookieName += "=; expires=" + cookieDate.toGMTString();
}

