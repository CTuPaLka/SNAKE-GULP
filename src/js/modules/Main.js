import { Settings } from "./Settings.js";
import { Status } from "./Status.js";
import { Snake } from "./Snake.js";
import { Board } from "./Board.js";
import { Menu } from "./Menu.js";
import { Food } from "./Food.js";
import { Game } from "./Game.js";
import { Counter } from "./Counter.js";

export function mainLoad() {
	window.addEventListener('load', () => {
		const settings = new Settings();
		const status = new Status();
		const snake = new Snake();
		const board = new Board();
		const menu = new Menu();
		const food = new Food();
		const game = new Game();
		const counter = new Counter();

		settings.init({ speed: 5, winLength: 20 });
		board.init(settings, snake);
		food.init(settings, snake, board);
		game.init(settings, status, board, snake, menu, food, counter);

		board.renderBoard();
		board.renderSnake();

		food.setNewFood();
		game.run();
	});
}



// export function mainLoadReload() {
// 	window.addEventListener('load', () => {
// 		const settings = new Settings();
// 		const status = new Status();
// 		const snake = new Snake();
// 		const board = new Board();
// 		const menu = new Menu();
// 		const food = new Food();
// 		const game = new Game();

// 		// 	 snake.this.body = [{
// 		// 		x: 1,
// 		// 		y: 1,
// 		//   }];

// 		settings.init({ speed: 5, winLength: 1 });
// 		board.init(settings, snake);
// 		food.init(settings, snake, board);
// 		game.init(settings, status, board, snake, menu, food);

// 		board.renderBoard();
// 		board.renderSnake();

// 		food.setNewFood();
// 		game.run();
// 	});
// }