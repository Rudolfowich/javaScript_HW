let str = "abcde"
alert(str[0])
alert(str[1])
alert(str[str.length-1])
for(x of str){
    if(x === 'a'){
        console.log("я знаю эту букву")
    }else if(x === 'b' ){
        console.log("я знаю эту букву")
    }else if(x === 'e'){
        console.log('я знаю эту букву')
    }else{
        console.log(x)
    }
}