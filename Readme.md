# Заготовка для проектов

* Для сборки используется Gupl
* Bootstrap
* Препроцессор SASS
* Только осваиваю Gupl и Bootstrap, так что всё еще будет меняться и дорабатываться
---
**Установка**

git clone https://github.com/tatyanabak/Template_for_project_with_Gulp_and_Bootstrap.git my-project

cd my-project

npm install

---
**Команды**

**gulp start** - запускает сборку и запускает результат в браузере

**gulp css** - собирает минифицированный CSS файл. В процессе использует sourcemap и autoprefixer

**gulp images** - оптимизирует SVG

---
**Плагины**

* [plumber](https://www.npmjs.com/package/gulp-plumber): при появлении ошибки, формирует вывод о её наличии, не прерывая работу Gulp.
* [sourcemap](https://www.npmjs.com/package/gulp-sourcemaps): позволяет быстро вносить правки, особенно когда для сборки используется несколько файлов.
* [sass](https://www.npmjs.com/package/gulp-sass): преобразует SASS в CSS
* [postcss](https://www.npmjs.com/package/gulp-postcss): процессор CSS? преобразует исходный CSS в модифицированный CSS с помощью плагинов.
* [autoprefixer](https://www.npmjs.com/package/autoprefixer): автоматически добавляет вендорные префиксы к CSS свойствам.
* [csso](https://www.npmjs.com/package/gulp-csso): минифицирует CSS.
* [rename](https://www.npmjs.com/package/gulp-rename): переименовывает файлы.
* [imagemin](https://www.npmjs.com/package/gulp-imagemin): оптимизиует изображения.
* [server](https://www.npmjs.com/package/browser-sync): запускает веб-сервер и перегружает его в реальном времени.
* [del](https://www.npmjs.com/package/del): удаляет файлы.
---
---
# Заготовка для readme.md проекта «project-name»
[Посмотреть результат](https://tatyanabak.github.io/project-name/).

**Описание проекта**

**Задачи проекта**
* 1
* 2

**Используемые языки и технологии**
* HTML, CSS
* HTML проверен на валидность с помощью [validator.w3.org](https://validator.w3.org/)
* HTML и CSS соответствуют [кодгайду HTML Academy](https://codeguide.academy/html-css.html)
* Проверка кода осуществляется с помощью editorconfig, stylelint (конфиругации взяты у HTML Academy)
* JS соответствуют [кодгайду HTML Academy](https://codeguide.academy/javascript.html)
* Проверка кода осуществляется с помощью eslint
* Используется Bootstrap
* Сборка выполняется посредством Gulp
