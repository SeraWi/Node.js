// 요청과 응답에 대한 로그를 남긴다 -> morgan
// dev: 개발시
// combined : 배포시 -> 더 자세해짐, 시간, 브라우저, ip 기록등...



const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();


// app 세팅
app.set('port', process.env.PORT || 3000);


// 2. 미들웨어 세팅
// 미들웨어 순서 중요 / 정해진건 없음 (요청 기록 -> static 제공)
app.use(morgan('dev')); //client에서 어떤 요청이 왔는지 기록된다.
app.use('/', express.static(path.join(__dirname,'public-3000'))); //정적파일 처리

//정적파일을 로그인한 사람에게만 보여주고 싶다면? -> 미들웨어 확장하기 (req, res, next)
app.use('/', (req, res, next) =>{
    if(req.session.id){
        //있으면 정적파일 보여주고 동작
        express.static(__dirname,'public-3000') (req, res, next)
    }else{
        //없으면 다음 라우터 실행
        next();
    }
});


app.use(cookieParser('zerochopassword')); 
app.use(express.json()); // 클라이언트에서 json 정보를 넘겨주면 파싱해준다.
app.use(express.urlencoded({extended: true})); //클라이언트에서 폼을 submit 할때, form을 파싱해준다.


app.use(session({
  resave : false, //요청이 왔을 때 세션에 수정사항이 생기지 않아도 다시 저장할지 여부
  saveUninitialized :false, //세션에 저장할 내역이 없더라도 세션을 저장할지
  secret: 'zerochopassword', //쿠키 암호화
  cookie: { //세션 쿠키 옵션
      httpOnly : true,
  },
  name : 'connect.sid', 
}));

// 요청경로, 실제 경로
// localhost:3000/zerocho.html     lesson6/public-3000/zerocho.html
// localhost:3000/hello.css        lesson6/public-3000/hello.css
// public-3000이라는 폴더 이름을 클라이언트가 전혀 알 수 없다! -> 보안에 좋다
//app.use('/', express.static(path.join(__dirname,'public-3000')));// html, css 등 정적 파일 보내주는 역할

let hello ;
app.use((req, res, next) =>{
    hello ='zerocho 비밀번호'; //이렇게 하면 비밀번호 유출된다. 주의
    app.set('hello' , 'zerocho계좌번호');  

    //미들웨어간에 데이터 전송 : req.data
    req.data = 'zerocho 비번';
})

app.get('/', (req, res, next) =>{

    app.get('hello'); // set으로 설정한 위 라우터 정보 가져옴

    req.data // zerocho 비번

    //사용자에 대한 고유한 세션
    req.session.id ='hello';

    req.body //body 안에 클라이언트가 보낸 정보 들어있음

    req.cookies // {{mycookie : test}
    req.signedCookies; //쿠키 암호화하기

    res.cookie('name', encodeURIComponent(name), {
        expires : new Date(),
        httpOnly : true,
        path :'/',

    })
    res.clearCookie('name', encodeURIComponent(name), {
        httpOnly : true,
        path :'/',
        
    })

    res.sendFile(path.join(__dirname, 'index.html'));
});



app.post('/', (req, res) =>{
    res.send('hello express');
});

app.get('/category/Javascript', (req, res) =>{
    res.send('hello, Javascript');
});

app.listen(app.get('port'), () =>{
    console.log('서버 실행')
})
