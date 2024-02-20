let value1;
let value2;
let contFoto = document.querySelector(".appli-contain__foto");
let buttonSubmit = document.querySelector(".form-foto__submit");

function contentPush(response) {
	contFoto.innerHTML = `
	<img class="" src="${response.url}" alt="img.${value1}x${value2}">
	`
}

function useCheck() {
	if (contFoto.innerHTML !== "") {
		contFoto.firstChild.remove();
	}
	value1 = +(document.getElementById("inputWidth").value);
	value2 = +(document.getElementById("inputHeight").value);
	console.log(value1, value2)
	if (value1 !=="" && !isNaN(value1) && (value1 >= 100 && value1 <= 300)) {
		if (value2 !=="" && !isNaN(value2) && (value2 >= 100 && value2 <= 300)) {
			return useRequest(`https://dummyimage.com/${value1}x${value2}`, contentPush)
		} else {
			contFoto.innerHTML = "<p>одно из чисел вне диапазона от 100 до 300!</p>"
		}
	} else {
		contFoto.innerHTML = "<p>одно из чисел вне диапазона от 100 до 300!</p>"
	}
}

function useRequest(url, callback) {
	fetch(url) 
		.then(response => {
			console.log(`запрос выполнен успешно. Статус: ${response.status}.`)
			return callback(response)
		})
		.catch(error => { 
			console.error(`Ошибка запроса, ${error}`)
			return contFoto.innerText = "Ошибка получения данных"
		})	
}

buttonSubmit.addEventListener('click', useCheck)

