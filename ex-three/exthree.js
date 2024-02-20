let containFotoCards = document.querySelector('.appli-contain__cards');
let buttonSubmitFoto = document.querySelector('.form-foto__submit');
let value;

function constructHTMLCards(massiveRespCards) {
	cards = ``;
	massiveRespCards.forEach((item) => {
		let card = 
		`<div class="cards-foto__card foto-card">
			<img class="foto-card__img" src="${item.url}" alt="foto-${item.id}">
			<p class="foto-card__descrip">${item.title}</p>
		</div>`;
		cards += card;
	})
	// massiveRespCards.forEach((item) => {
	// 	let card = 
	// 	`<div class="cards-foto__card foto-card">
	// 		<img class="foto-card__img" src="${item.thumbnailurl}" alt="foto-${item.id}">
	// 		<p class="foto-card__descrip">${item.title}</p>
	// 	</div>`;
	// 	cards += card;
	// })
	containFotoCards.innerHTML = cards;
}

function useRequest(url, callback) {
	let xhr = new XMLHttpRequest;
	xhr.open("get", url);

	xhr.onload = function() {
		if (xhr.status != 200) {
			console.log(`Статус запроса: ${xhr.status}`);
		} else if (callback) {
			let result = JSON.parse(xhr.response);
			callback(result);
			console.log(result);
		}
	}

	xhr.onerror = function()  {
		console.log(`не удалось выполнить запрос. Ошибка запрос. Статус запроса: ${xhr.status}`);
	}

	xhr.send();
}

let buttonClick = function() {
	value = +(document.querySelector('input').value);
	if (value <= 10 && value >= 1) {
		useRequest(`https://jsonplaceholder.typicode.com/photos?_limit=${value}`, constructHTMLCards)
		console.log(value)
	} else {
		console.log("число вне диапазона от 1 до 10");
	}
}

buttonSubmitFoto.addEventListener("click", buttonClick);

