const {odd, even} = require('./var'); //구조분해할당은 변수이름 같도록
const checkNumber = require('./func'); //변수명은 마음대로 사용가능


function checkStringOddOrEven(str){
    if(str.length %2){
        return odd;
    }else{
        return even;
    }
}


console.log(checkNumber(10));// checkOddOrEven 함수 실행됨 
console.log(checkStringOddOrEven('hello')); // 위에 작성한 함수 실행
