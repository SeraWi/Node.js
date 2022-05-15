// fs를 동기식으로 사용할 수 있게 제공해준다.

const fs = require('fs');

// 동기 메서드
let data = fs.readFileSync('./readme.txt');
console.log('1번', data.toString());

data = fs.readFileSync('./readme.txt');
console.log('2번', data.toString());

data = fs.readFileSync('./readme.txt');
console.log('3번', data.toString());

data = fs.readFileSync('./readme.txt');
console.log('4번', data.toString());

// 동기적으로 실행
// 하지만 실제로 동기적 실행은 서비스에 사용하지 않는다.
// 서버 세팅하는 과정(서버 초기화)에서만 동기적으로 실행하는 것이 대부분
// 사용자가 많을 수록 동기적 실행은 시간이 오래 걸린다.

// 대부분은 순서를 유지하면서 비동기 실행을 하는 것이 대부분 ***

// 아래처럼 비동기 + 순서 유지 -> callback hell
fs.readFile('./readme.txt', (err, data) =>{
    if(err){
        throw err;
    }
    console.log('1번', data.toString());
    fs.readFile('./readme.txt', (err, data) =>{
        if(err){
            throw err;
        }
        console.log('2번', data.toString());
        fs.readFile('./readme.txt', (err, data) =>{
            if(err){
                throw err;
            }
            console.log('3번', data.toString());
            fs.readFile('./readme.txt', (err, data) =>{
                if(err){
                    throw err;
                }
                console.log('4번', data.toString());
            })
        })
        
    })
    
})







