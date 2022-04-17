const {odd, even} = require('./var');
const checkNumber = require('./func');


function checkStringOddOrEven(str){
    if(str.length %2){
        return odd;
    }else{
        return even;
    }
}


console.log(checkNumber(10));// checkOddOrEven 함수 실행됨 
console.log(checkStringOddOrEven('hello')); // 위에 작성한 함수 실행
