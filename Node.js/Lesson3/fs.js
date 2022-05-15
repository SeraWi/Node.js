
//파일시스템
const fs = require('fs').promises;

fs.readFile('./readme.txt' , (err, data) =>{
    if(err){
        throw err;
    }
    console.log(data); //2진법, 16진법, 컴퓨터언어
    console.log(data.toString());
})

// 파일 시스템 --> 프로미스 지원 (then)
fs.readFile('./readme.txt').then((data)=>{
    console.log(data);
    console.log(data.toString());
})
.catch((err) =>{
    throw err;
})

// 파일 생성
fs.writeFile('./writeme.txt', '글이 입력됩니다.')
.then(() =>{
    // 생성후 읽어오기
    return fs.readFile('./writeme.txt');
})
.then((data) =>{
    console.log(data.toString());
})