import { Snake } from "./Snake.js";
import { Board } from "./Board.js";
import { Game } from "./Game.js";

export class Counter{
	constructor() {
		this.counterEl = document.getElementById('counter');
		this.board = new Board();
		this.snake = new Snake();
		this.game = new Game();
	}

	/**
	 * метод выводит текущий счет
	 */
	showScore(snakeLength){
		this.counterEl.innerText = `${snakeLength-1}`
	}

}