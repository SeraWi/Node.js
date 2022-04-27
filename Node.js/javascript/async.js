// async, await
// promise chaining 문제 발생 -> async/await 가 해결

// clear style of ussing promise

// 1. async
// function fetchUser(){
//     // do network request in 10 secs...
//     return 'ellie';   
// }

function fetchUser(){
    // do network request in 10 secs...
    return new Promise((resolve, reject)=>{
       // return ('ellie');  resolve나 reject 이 없으면 promise는 pending 상태에 머무른다.
        resolve ('ellie'); // Promise { 'ellie' }
    });   
}

// async를 쓰면 자동으로 코드 블럭이 promise 로 바뀐다.
async function fetchUserByAsync(){
    // do network request in 10 secs...
   return 'ellie';   
}

const user = fetchUser();// 동기식
const userA = fetchUserByAsync();
user.then(console.log); // ellie
userA.then(console.log); // ellie
const value = userA.then();//value : [object Promise]
console.log(`value : ${value}`);
console.log(user); // user를 가져올때 까지 10초를 기다린다.


// 2. await 기다려!
// async 함수 안에서만 사용가능

function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
    await delay(2000); // 2초가 지나면 resolve가 호출되는 promise 가 전달된다.
    return 'Apple';
}

async function getBanana(){
    await delay(2000);
    return 'banana1';
}

async function getBanana2(){
     return delay(3000) //promise return
    .then(() => 'banana2 return');
}

//기존 chaining 방식
function pickFruits(){
    return getApple()
    .then (apple =>{
        return getBanana()
        .then(banana =>`${apple} + ${banana} pickFruits1으로 실행`);
    })
}

pickFruits().then(console.log);


// 마치 동기적으로 사용가능
async function pickFruits2(){
    const apple = await getApple(); /// apple 을 얻을 때까지 2초 기다린다.
    const banana = await getBanana(); // banana는 apple을 얻을 때까지 기다린다,
    return `${apple} + ${banana} + pickFruits2 로 생성`;
}

pickFruits2().then(console.log);
async function pickFruits3(){
    const applePromise = getApple(); // promise 실행
    const bananaPromise = getBanana(); //promise 실행
    // 병렬적으로 수행
    const apple = await applePromise;
    const banana = await bananaPromise; 
    return `${apple} + ${banana} + pickFruits3 로 생성`;
}


pickFruits3().then(console.log);

// 병렬적으로 수행하도록 하기( banana가 apple을 기다리지 않도록 할 수 있게!!)
// 3. useful Promise APIs
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join('+'));
}
pickAllFruits().then(console.log);


function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);