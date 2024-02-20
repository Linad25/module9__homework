let value1;
let value2;
let cont = document.querySelector(".appli-contain__cards");
let buttonSubmit = document.querySelector(".form__submit");

cont.innerHTML = localStorage.getItem('result')


function constructHTMLCards(massiveRespCards) {
	let cards = ``;
	massiveRespCards.forEach((item) => {
		let card = `<div class="cards-foto__card foto-card">
			<img class="foto-card__img" src="${item.url}" alt="foto-${item.id}">
			<p class="foto-card__descrip">${item.title}</p>
		</div>`;
		cards += card;
	})
	localStorage.setItem('result', cards);
	cont.innerHTML = cards;
}

function useCheck() {
	if (cont.innerHTML !== "") {
		cont.firstChild.remove();
	}
	value1 = +(document.querySelector(".entervaluenumberstr__field").value);
	value2 = +(document.querySelector(".entervaluelimit__field").value);
	console.log(value1, value2)
	if (value1 !=="" && !isNaN(value1) && (value1 >= 1 && value1 <= 10)) {
		if (value2 !=="" && !isNaN(value2) && (value2 >= 1 && value2 <= 10)) {
			return useRequest(`https://jsonplaceholder.typicode.com/photos?_page=${value1}&_limit=${value2}`, constructHTMLCards)
		} else {
			cont.innerHTML = "<p>Limit out of range from 1 to 10!</p>"
		}
	} else {
		if (value2 !=="" && !isNaN(value2) && (value2 >= 1 && value2 <= 10)){
			cont.innerHTML = "<p>Page number out of range from 1 to 10!</p>"
		} else {
			cont.innerHTML = "<p>Page number and limit out of range from 1 to 10!</p>"
		}
	}
}

function useRequest(url) {
	fetch(url) 
		.then(response => {
			console.log(`Запрос выполнен успешно. Статус: ${response.status}`)
			let result = response.json()
			console.log(result)
			return result
		})
		.then(data => {
			constructHTMLCards(data)
			return console.log(data)
		})
		.catch(error => { 
			console.error(`Ошибка запроса, ${error}`)
			return cont.innerText = "Ошибка получения данных"
		})	
}

// function useRequest(url, callback) {
// 	let xhr = new XMLHttpRequest;
// 	xhr.open("get", url);

// 	xhr.onload = function() {
// 		if (xhr.status != 200) {
// 			console.log(`Статус запроса: ${xhr.status}`);
// 		} else if (callback) {
// 			let result = JSON.parse(xhr.response);		
// 			constructHTMLCards(result);
// 			console.log(result);
// 		}
// 	}

// 	xhr.onerror = function()  {
// 		console.log(`не удалось выполнить запрос. Статус запроса: ${xhr.status}`);
// 	}

// 	xhr.send();
// }

buttonSubmit.addEventListener('click', useCheck)