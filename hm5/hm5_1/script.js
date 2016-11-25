let timer = function (seconds) {
	return {
		then : 
			function (result) {
				let promise = new Promise((resolve) => {
					setTimeout(() => {
						resolve();
					}, seconds);
				});
			
				promise.then(result);
			}
	}
}

timer(3000).then(() => console.log('я вывелась через 3 секунды'));