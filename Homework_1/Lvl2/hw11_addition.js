/*Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.

Спрашиваем у пользователя через prompt число.
Если пользователь ввёл 10h, то мы выводим ему количество секунд за 10 часов.
Если пользователь ввёл 10d, то мы выводим ему количество секунд за 10 дней.
Если пользователь ввёл 10w, то мы выводим ему количество секунд за 10 недел.
Если пользователь ввёл 10m, то мы выводим ему количество секунд за 10 месяц.

Проверяем то, что в конце)*/
alert("Привет, данный скрипт помогает посчитать количество секунд в часе, в сутках, в месяце. Нажми ОК чтобы продолжить.")
var getTime = prompt("Введите в таком формате: 3h, 3d, 3w, 3m - ч. д. н. м.")
while(true){
	var timeType = getTime.charAt(getTime.length - 1);
	var size = getTime.length;
	size --;
	var timeNumber = getTime.substring(0, size);
	timeNumber = Number(timeNumber);
	if(timeNumber !== Number(timeNumber) || timeType !== "h" && timeType !=="d" && timeType !=="w" && timeType !=="m"){
		alert("Неверный формат ввода, повторите попытку в таком формате: 3h, 3d, 3w, 3m")
		var getTime = prompt("Введите в таком формате: 3h, 3d, 3w, 3m - ч. д. н. м.")}
	else if(timeNumber == Number(timeNumber) && timeType == "h" || timeType =="d" || timeType =="w" || timeType =="m"){
		break}}
if(size < 10 && timeNumber == Number(timeNumber)){
	if(timeType == "h"){
		var hour = 60*60*timeNumber;
	alert("В "+ timeNumber +" часах - " + hour + " секунд.");
	}
	else if(timeType == "d"){
		var days = 60*60*24*timeNumber;
	alert("В "+ timeNumber +" днях - " + days + " секунд.");
	}
	else if(timeType == "w"){
		var week = 60*60*24*7*timeNumber;
	alert("В "+ timeNumber +" неделях - " + week + " секунд.");
	}
	else if(timeType == "m"){
		var month = 60*60*24*7*4*timeNumber;
	alert("В "+ timeNumber +" месяцах - " + month + " секунд.");	}}