require('./var');
//파일을 실행만 하고, 변수를 가져오고 싶지 않을때

console.log(require);

// require역시 하나의 모듈
// 가장 위에 오지 않아도 됩니다.
//import 는 가장 위에 있어야 한다.

// 순환참조
// 파일끼리 계속 참조하는  상황
// 무한반복되는 형식
// 순환참조되는 경우 -> 호출한쪽에서 {} 빈객체로 바꿔버린다.


//process.env : 환경변수
//process.cwd() : node를 실행시킨 파일 경로 보여줌
//process.exit(0) 코드가 없거나 0이면 정상 종료

//os에 대한 정보
const os = require('os');
console.log(os.cpus());


//경로 처리
// 폴더와 경로 조작해줌
const path = require('path');
console.log(path);

//dirname + var.js 붙여줌
console.log(path.join(__dirname, 'var.js'));


// 절대 경로 : 위에서 부터 출발
// 상대 경로 : 내 기준으로 올라간다.


// \\와 \의 차이 : \는 윈도 경로 구분자, \\는 자바스크립트 문자열안에서 사용
// \가 특수문자라 \\로 이스케이프 해준것

