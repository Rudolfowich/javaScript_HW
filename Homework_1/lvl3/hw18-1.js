//Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).
var str = 'я учу javascript!';
//str = str.substr(0, 1); ** sybstr
//str = str.substring(0, 1); ** substring
str = str.slice(0, 1);
alert(str)