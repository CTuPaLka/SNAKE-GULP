// основной модуль
import gulp from "gulp";
// импорт путей
import { path } from "./gulp/config/path.js";
// Импорт общих плагинов
import { plugins } from "./gulp/config/plugins.js";

// перпедаем значения в глобальную переменную
global.app = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	path: path,
	gulp: gulp,
	plugins: plugins,
}

// импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { images } from "./gulp/tasks/images.js";
import { otfToTtf, ttfToWoff2, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { svgSprive } from "./gulp/tasks/svgSprive.js";
import { zip } from "./gulp/tasks/zip.js";
import { ftp } from "./gulp/tasks/ftp.js";


// наблюдатель за изменениями в файлах
function watcher() {
	gulp.watch(path.watch.files, copy) // см. строку с html, только для copy
	gulp.watch(path.watch.html, html) // чтобы при любом изменении все выгружалось на сервер - писть это "gulp.watch(path.watch.html, gulp.series(html, ftp));"
	gulp.watch(path.watch.scss, scss) // см. строку с html, только для scss
	gulp.watch(path.watch.js, js) // см. строку с html, только для js
	gulp.watch(path.watch.images, images) // см. строку с html, только для images
}

export { svgSprive }

// Последовательная обработка файлов
const fonts = gulp.series(otfToTtf, ttfToWoff2, ttfToWoff, fontsStyle);

// основные задачи
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, images))

// построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);

// экспорт сценариев
export { dev };
export { build };
export { deployZIP };
export { deployFTP };

// выполнение сценария по умолчанию
gulp.task('default', dev);