//Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.
var lesis = 'Я-учу-javascript!';
lesis = lesis.replace(/-/g, "!");
alert(lesis);