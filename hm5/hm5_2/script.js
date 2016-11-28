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
			
			response.sort(function (a, b) {
				if (a.name > b.name) {
					return 1;
				}
				if (a.name < b.name) {
					return -1;
				}
				// a должно быть равным b
				return 0;
			});
			
			let contentPaste = '';
			for(let i = 0; i < response.length; i++) { 
				contentPaste += response[i].name + '</br>';
			}
			
			container.innerHTML = contentPaste;
		},
    error => console.log(error)
	);


function successImport(data) {
	for (let i = 0; i < data.length; i++) {
		data.compare(i, i+1);
	}
}


		