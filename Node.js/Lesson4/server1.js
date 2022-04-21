const http =require('http'); //http 서버 생성

const serverr = http.createServer((req,res) =>{
    res.write('<h1>hello node!</h1>');
    res.write('<p>heelo server</p>');
})


//포트지정 
// .listen(8080, () =>{
//     console.log('8080 port server !')
// })


.listen(8080);

serverr.on('listening',()=>{

    console.log('8080번 포트 에서 서버 대기')
})

serverr.on('error', ()=>{
    console.error(error);
})


//localhost!!
