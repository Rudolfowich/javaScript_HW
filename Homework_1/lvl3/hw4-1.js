var obj = {
 'Минск ': ' Беларусь',
 'Москва ': ' Россия',
 'Киев ': ' Украина'
};
for(i in obj){
	console.log(i + "- это" + obj[i] + ".");
}