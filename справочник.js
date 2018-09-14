// комментарий
/* тоже
коммент */
console.log(120*(400/100)); выводит значение примера
console.log('hellow'); выводит на экран слово /* не возвращает значение, по этому выводит undefined */
console.log('вывожу переменную А: ' + a + ' и два предложения')
// Типы данных выводимых console.log
alert(a); -- выводит переменную a (Этот сайт говорит...)
document.write("Привет мир!"); -- выводит на экран
Number -- цифры
string -- текст
boolean -- true/false
undefined -- неопределенно
array -- масcив [50,320,480]
object -- {meal: 'Завтрак', energy: 50}
// Конец
keks.ask('текст'); -- комманда htmlacademy
put my_number 1; // сохраняем число 1 в переменную my_number
get my_number; // достаем число данные из переменной my_number
var my_number; // создаем переменную
my_number = 20; // присваиваем значение 20
'значение переменной: ' + my_number; // выводит значение переменной: 20
if (5>4) {
    console.log('5 больше 4')
} else if (5=4) {
    console.log('Этого не может быть!');
}
>= больше равно
<= меньше равно
== сравнивает два значения, перед этим приводит одно значение к типу другого
=== сравнивает разные значения, НЕ преобразуя типы
!= приводит значения к одному типу, если они равны то FALSE
!== НЕ преобразует к одному типу, если они равны то FALSE
Переменная.toString() преобразует тип в строчный
parseInt(Переменная, 10) переводит строчное значение переменной в ДЕСЯТИЧНУЮ СИСТЕМУ 

var on = false;
if (on) {
    условие если on true либо on = 1/2/3...
}else {
    условие если on false либо on=0/''
}

if (one && two) {
    если оба true;
}
if (one || two) {
    если хотябы один true;
}

for (var i = 0; i < count; i = i + 1) {
    цикл повторяеться count раз
}
i++ (i=i+1)
i-- (i=i-1)
i += 2  (i=i+2)

while (i>0) {
    i--;
    break; -- прерывание цикла
}

var mas = [39, 489, 20]; -- создание массива
console.log(mas[0]); -- выведет первый элемент массива
console.log(mus.length); -- выыодит длину массива

for (var i = 0; i <= usersByDay.length - 1; i++){
  console.log(usersByDay[i]);                     ---   Вывод всех элементов массива
}
if (a % 2 !==0) {
    если остаток от деления a на 2 не равен 0 (тоесть нечетное)
}

/* 
    среднее медианное значение: все числа располагаем в порядке возрастания и число по середине являеться среднем медианным значением, если чисел четное количество то берем среднеее значение чисел по середине
*/
/* <p id="name"></p> */
var runGame - function(quantity, all){
    // создаем функцию
}

var calculateMiles = function(distance){  // объявление функции
    var miles = distance * 0.25;
    console.log('получим ' + miles + ' милей')
    return miles; // закончит выполнение, при вызове будет давать значение переменной miles
}
calculateMiles(400); // вызов функции с аргументом distance = 400

Math.ceil(10.4); // округляет число до целого в большую сторону, итог 11
Math.floor(10.7); // округляет в меньшую сторону, итог 10
Math.round(10.3); // округляет до ближайшего значения, итог 10





document.getElementById("name").innerHTML = "Надпись в теге p";
var N = document.getElementById("name"); в переменную N кладет адрес id="name"

innerHTML
get.elementsByTagName("p"); // всем тегам <p>

var x = document.getElementById("main"); // в х кладет все с классом main
var y = x.getElementsByTagName("p");// в y кладет все эл из х у которых тег <p>

getElementsByClassName("btn") // все с классом class="btn"
onclick="document.код"; // оператор нажатия

<button type="button" 
onclick="document.getElementById('id1').style.color = 'red'">
Click Me!</button>



<script src="script.js"></script> -- подключаем скрипт (лучше в конце страницы т.к пока скрипт не выполниться следующие элементы не отрисуються)

document.body.style.background = 'yellow'; -- изменяет фон body на желтый

document.querySelector('ul/.price/li:last-child'); -- находит любой эдемент с помощью css селекторов

var adres = document.querySelector('ul:last-child'); -- переменная adres хранит адрес последнего ul элемента
var adres = document.querySelector('li.toaster'); -- записывает адрес li с классом class="toaster"

a.classList.add('logo'); -- добавляем класс logo (class="logo"), адрес в переменной a
a.classList.remove('logo') -- удаляет класс logo

document.querySelectorAll('.logo'); -- сохраняет ВСЕ с класом logo

header.children -- выдает все дочерние элементы header 

document.createElement('li') -- создает элемент li
var card = document.createElement('li') -- создает li и записывает его в переменную card
body.appendChild(card) -- созданный элемент (сохраненный в переменной card) размещает в конце body

card.textContent = 'добавил текст через js'; -- добавляем элементу с классом class="card" текст
console.log(card.textContent); -- выведет текст элемента с классом card

/* вставляем картинку в html код */
var picture = document.createElement('img'); -- создаем тег img и записываем в переменную picture
picture.src = 'images/picture.jpg'; -- добавляем адрес картинки
picture.alt = 'картинка через js'; -- описание картинки


document  // переменная в которой храниться корневой элемент html

// переключение фильтра (кекстаграмм)
function toggleFilter(filterName) {
    var control = document.querySelector('li.' + filterName);
    if (control) {
        control.classList.add('active');
    }

    var photo = document.querySelector('.photo');
    if (photo) {
        photo.classList.add(filterName);
    }
}
// 11 задание

data атрибуты, создаються в html, не отображаються в браузере, передают инфу в js
// <li class="walden" data-filter="walden"></li> -- добавляем data атрибут

b = document.querySelector('.walde')
a = b.dataset.filtername; -- в переменную a записанно значение атрибута data-filtername

b.innerHTML = 'прив'; -- изменяет содержимое html документа 
b.innerHTML = 'прив'; -- изменяет содержимое html документа 

// добавляем обработчик событий, при нажатии вызывает функцию
b.addEventListener('click', funcktion() {
                        tooggleFilter(b.dataset.filter)
                   })
 
↔ -- для instagram

// ОБЪЕКТЫ 

var firstCat = { // создаем объект с именем firstCat
    name: 'Кекс', // ключ name со значением Кекс
    points: 0,
    
    getGreeting: function() { // создаем функцию внутри объекта 
        console.log(this.name); // через this обращаемся к объекту в котором функция
        return 'привет!'; // используеться для работы с данными объекта 
    }
}

/*  можно создавать новые объекты 
    firstCat.likes = 2;
*/

console.log(firstCat.name); // выведет - Кекс
firstCat.points = 5; // в ключ points записываем 5


// Передача объекта по ссылке

var secondCat = firstCat;
firstCat.name = 'Рудольф';
console.log(secondCat.name); // выведет Рудольф, а не Кекс
// secondCat тоже поменяеться, так как переменная это всего лишь ссылка на объект

// метод Push
var mas = [1, 2];
mas.push(3, 4); // добавляем в конец массива новые элементы



// обращение к объекту как к массиву
var processor = {
    'i5': 5000,
    'i7': 10000
};

var computer = {
    basicPrice: 5000,
    processor: 'i5'
}

console.log(processor[computer.processor]); // можем использовать строку или переменную чтоб найти свойство объекта

document.body.contentEditable = true // добавляем в консоли браузера чтоб менять весь текст на странице


label.htmlFor = "btn-1"; -- <label for="btn-1">
    
<button onclick="myFunction()">нажми</button> // кнопка вызывает функию myFunction

div.style.cssText = "color: red; \
background-color: blue; \
width: 100px; \ " ; // задаем  много стилей диву  

/* видимо submit отправляет на сервер, а не в js. И для js не нужен <form> */

var part = new Array();  // создание пустого массива

onmouseover = "open()";  // при наведении на элемент запускаеться функция open() 

Math.floor(Math.random() * 20) - 10;  -- выдает рандомное число от -10 до 10

Math.pow(2,3); -- 2 в 3 степени 2^3


playerContainer.insertBefore(newPlayer, playerContainer.firstChild); // элемент newPlayer ставиться перед первым родительском элементом playerContainer (внутри playerContainer)



/* интересный прием */

function setAge(age){
    this.age = age || 10; // если переменная age пуста, то в this.age вложиться число 10
}


window -- объект в котором все окно (document  внутри)
window - зависит от браузера, а document от html


/* получить css свойтво через js */

element = document.getElementById('exampleId');
color = window.getComputedStyle(element).backgroundColor;

/* */

var isOpen = confirm('open?'); //   появляеться окно с выбором да/нет (isOpen - имеет булевое значение)



if (a.classList.contains('discount'));  // проверка есть ли у переменной A класс dicsount


Number(allPrice[i].innerHTML); //   строку полученную из html преобразую в число