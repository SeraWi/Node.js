const value =require('./var'); // var.js 에서 js 략 가능

//const odd = value. odd;
//const even = value. even;
// 위에 처럼 value 의 값을 가져 오던 것을 아래로 바로 가능
const {odd, even} = require('./var.js'); // 구조분해 가능

console.log(value);


//{ odd: '홀수입니다.', even: '짝수입니다.' }


function checkOddOrEven(number){
    if(number %2){
        return odd;
    }else{
        return even;
    }
}

// 파일에서 단한번만 사용할 수 잇음
module.exports = checkOddOrEven;