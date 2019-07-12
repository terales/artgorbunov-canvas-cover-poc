
## This is a [research code](https://meiert.com/en/blog/20140716/research-and-production/).

[![PDD status](http://www.0pdd.com/svg?name=terales/artgorbunov-canvas-cover-poc)](http://www.0pdd.com/p?name=terales/artgorbunov-canvas-cover-poc)

![Visual demo of the project](./demo-art-gorbunov-canvas.gif)

[Руст Кулматов](http://artgorbunov.ru/vacancies/frontender/)
> В книжном движке много работы: нужно разобраться с очередью обработки модулей,<br>
> научить якоря правильно замедлять разворот и переверстать обложку на канвасе или СВГ.

Знаю, что SVG хоть и наглядный, и удобный, но когда важна производительность — канвас в разы эффективнее по потреблению памяти, по скорости прорисовки.<br>
Поскольку в книге у обложек чисто декоративная функция, то разумно уменьшить их потребление ресурсов насколько это возможно за разумное время.

У меня нет опыта работы с канвасом, потому интересно как переверстать обложку по примеру из [демо книги «Пользовательский интерфейс».](http://artgorbunov.ru/books/ui/demo/)

### Итог

https://www.terales.info/post/canvas-cover/

### Запуск
```
npm i
npm start
```
