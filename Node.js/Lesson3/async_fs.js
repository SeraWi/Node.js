// 블로킹, 논블로킹
// 비동기 -> 블로킹, 동기 -> 논블로킹

// 순서대로 실행되지 않음 (비동기 함수이기때문에)
const fs = require('fs');

fs.readFile('./readme.txt', (err, data) =>{
    if(err){
        throw err;
    }
    console.log('1번', data.toString());
})

fs.readFile('./readme.txt', (err, data) =>{
    if(err){
        throw err;
    }
    console.log('2번', data.toString());
})

fs.readFile('./readme.txt', (err, data) =>{
    if(err){
        throw err;
    }
    console.log('3번', data.toString());
})

fs.readFile('./readme.txt', (err, data) =>{
    if(err){
        throw err;
    }
    console.log('4번', data.toString());
})
