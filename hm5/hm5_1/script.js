let timer = function (seconds) {
<<<<<<< HEAD
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

=======
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, seconds); 
	});
}
>>>>>>> hm5_1
timer(3000).then(() => console.log('я вывелась через 3 секунды'));