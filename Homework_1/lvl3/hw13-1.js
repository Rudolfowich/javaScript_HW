//Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice).
var str = 'aaa bbb ccc';
/*str = str.substr(4, 3);
console.log(str);
substr**************
*/
/*str = str.substring(7, 4);
console.log(str);
substring***********
*/
str = str.slice(4, 7);
console.log(str);
//slice*************

