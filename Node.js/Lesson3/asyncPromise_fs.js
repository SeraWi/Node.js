const { read, readFile } = require('fs');

const fs = require('fs').promises; // 파일시스템 프로미스 사용

// promise chaining 으로 비동기 + 순서 유지하기
fs.readFile('./readme.txt')
.then((data) =>{
    console.log('1번', data.toString());
    return fs.readFile('./readme.txt');
})
.then((data) =>{
    console.log('2번', data.toString());
    return fs.readFile('./readme.txt');
})
.then((data) =>{
    console.log('3번', data.toString());
    return fs.readFile('./readme.txt');
})
.then((data) =>{
    console.log('4번', data.toString());
})
.catch((err)=>{
    throw err;
})

// async await으로 사용하기

async function main(){
    let data  = await fs.readFile('./readme.txt');
    console.log('1번',data.toString());

    data  = await fs.readFile('./readme.txt');
    console.log('2번',data.toString());

    data  = await fs.readFile('./readme.txt');
    console.log('3번',data.toString());

    data  = await fs.readFile('./readme.txt');
    console.log('4번',data.toString())
    
}

main();