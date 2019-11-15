var time = prompt("Привет, сколько часов перевести в секунды?");
time = Number(time);
while(true){
	if(time !== Number(time)) {
		alert("Это не число, повторите попытку!")
		time = Number(prompt("Cколько часов перевести в секунды?"));
}	else{
		break;	}}
var hour = 3600;
var i = time * hour;
var time = Math.round(time);
alert("В " + time + " часах - " + i + " секунд.");	