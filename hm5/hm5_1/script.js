let timer = function (seconds) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, seconds); 
	});
}

timer(3000).then(() => console.log('я вывелась через 3 секунды'));