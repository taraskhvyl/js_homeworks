function sortCities(url) {

    return new Promise(function(resolve, reject) {

        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onload = function() {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                var error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        };

        xhr.onerror = function() {
            reject(new Error("У вас проблемы"));
        };

        xhr.send();
    });
}

sortCities('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json')
    .then(
        response => {
            response = JSON.parse(response);
            response.sort(function(a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                // a должно быть равным b
                return 0;
            });
            let theTemplateScript = cities.innerHTML,
                theTemplate = Handlebars.compile(theTemplateScript),
                theCompiledHtml = theTemplate(response);

            insert.innerHTML = theCompiledHtml;
            return response;
        },
        error => console.log(error)
    ).then(
        response => {
            inputInsert.oninput = function(e) {
                let val = inputInsert.value,
                    newArray = [],
                    forInsert = '';
                for (let prop in response) {
                    let city = response[prop].name;
                    if (city.toLowerCase().indexOf(val) !== -1) {
                        newArray.push(city);
                    }
                }

                for (let el = 0; el < newArray.length; el++) {
                    forInsert += '<p>' + newArray[el] + '</p>';
                }

                if (forInsert === '') {
                    insert.innerHTML = 'ничего не найдено';
                } else {
                    insert.innerHTML = forInsert;
                }

            };
        }
    )
