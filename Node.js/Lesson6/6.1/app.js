const express = require('express');
const path = require('path');

// 1. app 만들기
const app = express();

// 2. app 포트 설정
app.set('port',3000); // 포트를 3000으로 세팅
// app.get('port' ):이런식으로 가져다 쓸 수 있음


//미들웨어 : 공통으로 사용하고 싶은 것들
//미들웨어는 next를 파라미터로 넘겨줘야지, 미들웨어 다음 코드가 실행된다*
// req, res, next -> 이게 미들웨어, 함수가 미들웨어임
// 3. 공통 미들 웨어
app.use((req, res, next) =>{
    // 서버에 요청할때마다 실행
    console.log('모든 요청에 실행하고 싶어요');
    next();
})

// 4. 라우터 설정
app.use('/about',(req, res, next) =>{
    // /about 뒤에 모든 서버에 요청할때마다 실행
    console.log('about 뒤에 실행하고 싶어요');
    next();
})

// * : 가장 넓은 범위의 라우터 -> 아래쪽 전체 실행 안된다.
// app.get('*', (req, res) =>{
//     res.send(`hello everybody`);
// })

app.get('/', (req, res) =>{ //첫요청

   // res.send('hello express');
   
   //index.html파일을 보여줌
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/',(req,res) =>{
    res.send('hello express');
})

// app.get('/category/:name', (req, res) =>{
//     // :는 와일드 카드
//     // name이라는 파라미터 받음
//     res.send(`hello ${req.params.name}`);
// });

// 위에 메서드가 실행되고, 아래는 실행이 안된다.
// 따라서 와일드는 아래에 두기!
app.get('/category/javascript', (req, res) =>{
    res.send(`hello`);
})


// 파라미터 사용
app.get('/category/:name', (req, res) =>{
    // :는 와일드 카드
    // name이라는 파라미터 받음
    res.send(`hello ${req.params.name}`);
});


app.get('/about', (req,res) =>{
    res.send('hello express');
})

// app.listen(3000, () =>{
//     console.log('익스프레스 서버 실행');
// })


// 5. 에러 미들웨어
// err, req, res, next 네가지 반드시 필요
app.use((req, res, next) =>{
    //404
    res.send('404 임!!!');
})

app.use((err, req, res, next)=>{
    console.err(err);
    console.log('에러 미들웨어 실행');
    res.send('에러났지롱,,,!!');
})

app.listen(app.get('port'), () =>{
    console.log('서버 실행')
})




// 와일드 카드 실행위치
// 미들웨어, next
// 라우터
// 범위가 넓은 라우터는 아래에 두기