//Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
let arr = [-1, 3, 10, 4, -4, -7];
var p = 0;
for(x in arr){
	if(arr[x] > 0){
		p += arr[x];
}}
console.log(p);