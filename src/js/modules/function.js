/* Проверка поддержки webp, добавление класса webp или no-webp для HTML*/
export function isWebp() {
	// проверка поддержки webp
	function testWebP(callback) {
		var webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	//Добавление класса _webp или _no_webp для HTML
	testWebP(function (support) {
		// if (support == true) {
		// 	document.querySelector('body').classList.add('webp');
		// } else {
		// 	document.querySelector('body').classList.add('no-webp');
		// }

		//* альтернатива запись выше. запись выше работает, но не сработало background: url() 0 0 no-repeat (фоновое изображение не появлялось)
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className); 

	});
}