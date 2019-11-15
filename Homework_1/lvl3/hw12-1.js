//Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены. (посмотрите replace например)
var str = 'aaa@bbb@ccc';
var res = str.replace(/@/g, '!');
console.log(res);