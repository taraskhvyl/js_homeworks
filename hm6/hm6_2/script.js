window.onload = init();

function init() {
    let cookies = listCookies();
    container.innerHTML = cookies;
}

// создаем таблицу с куками
function listCookies() {
    let theCookies = document.cookie.split(';'),
        addArray = [],
        content = '<table><thead><td>№</td><td>name</td><td>value</td><td>delete</td></thead>';
    for (let i = 1; i <= theCookies.length; i++) {
        addArray = theCookies[i - 1].split('=');
        content += `<tr><td>${i}</td><td>${addArray[0]}</td><td>${addArray[1]}</td><td><button data-cookie="${addArray[0]}" class="deleteCookie">delete</button></td></tr>`;
    }
    content += '</table>';
    return content;
}

// кнопка удаления куки
document.body.addEventListener('click', function(event) {
    let target = event.target;
    if (target.classList.contains('deleteCookie')) {
        if (target.hasAttribute("data-cookie")) {
            dataAttr = target.dataset.cookie;
            confirmDelete(dataAttr);
        }
    }
});


// вызов конфирма
function confirmDelete(cookie) {
    let question = confirm("Вы на самом деле хотите удалить cookie " + cookie);
    if (question) {
        deleteCookie(cookie);
        alert('Deleted');
        init();
    } else {
        alert('Вы перехотели');
    }
}

// удаляем куки по имени
function deleteCookie(cookieName) {
    let cookieDate = new Date();
    cookieDate.setTime(cookieDate.getTime() - 1);
    document.cookie = cookieName += "=; expires=" + cookieDate.toGMTString();
}

// этап добавления куки
addCookie.addEventListener('click', function() {
    let nameCookie = document.getElementById('name').value,
        value = document.getElementById('value').value,
        time = document.getElementById('time').value;
    if (nameCookie === '' || value === '' || time === '') {
        alert('Заполните поля');
    } else {
        createCookie(nameCookie, value, time);
    }
});


// создаем cookie

let createCookie = function(name, value, days) {
    let expires;
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
    init();
}