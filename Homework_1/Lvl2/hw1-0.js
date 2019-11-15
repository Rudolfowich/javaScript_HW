var fkey = prompt("Введите числовое значение");
var fkey = Number(fkey);
let sum = 0;
for(i = 0; i < fkey; i++){
	if(i % 2 == 1)
		sum += i; }
console.log(sum);