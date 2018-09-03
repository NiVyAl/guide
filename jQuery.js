/* Подключение jQuery с сервера google (можно исп локальный файл) */
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
/* */

$("селектор").действие();
    $("p").hide(); -- скрывает все элементы с тегом <p>
    $(".wrapper").hide(); -- все с классом wrapper
    $(this).hide(); -- current element
    
    
$(document).ready(function(){
   //весь код писать сдесь чтоб начал выполняться после загрузки страныцы 
});

/* когда нажата кнопка все <p> исчезают */
$("button").click(function(){
    $("p").hide();
});
/* */

$("*") -- все элементы
$("p.intro") -- все внутри <p>
$("ul li:first") -- первый li в ul


/* файл с кодом подключаем в <head> через <script> */

event - все пользовательские действия на которые страница может отвечать

/* эвенты */
Mouse Events     Keyboard Events	Form Events	   Document/Window Events
click	         keypress	        submit	       load
dblclick	     keydown	        change	       resize
mouseenter	     keyup	            focus	       scroll
mouseleave	 	                    blur	       unload
/* */

/* когда мышь наводим на <p>*/
$("p").mouseenter(function(){
    alert('you entered p') /* выводиться сообщение */
})
/* */


/* несколько эвентов <p> элементам */
$("p").on({
    mouseenter: function(){     /* при наведение меняеться цвет на серый */
        $(this).css("background-color", "lightgray"); 
    },
    click: function(){ /* при наведение меняеться цвет на желтый  */
        $(this).css("background-color", "yellow");
    }
})


$("p").dblclick(function(){ // при двойном нажатиии
    $(this).hide();     // <p> скрываються
})

$("p").hover(function(){
    alert('Навел на <p>');
},
function(){
    alert("убрал курсор с <p>")
});


$("button").click(function(){ // при нажатии кнопки <p> то hide то show
    $("p").toggle();      // и hide и show
});


$("p").hide(10, b());   // скрываеться с анимацией (10секунд длительность), как только анимация закончиться запуститься функция b() 

Date.now(); // время в данный момент