// async : 비동기의 꽃
// promise 가 비동기로 처리하는데, 이를 함수앞에 async 붙이면
// 자동으로 비동기로 인식함

async function fetchUser(){
    // do network request in 10 sec
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

function fetchUser2(){
    return new Promise(resolve, reject =>{
        resolve('ellie');
    });
}

//await 
// async 안에서만 사용가능
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));

}

async function getApple(){
    await delay(3000);
    return 'apple';
}

async function getBanana(){
    await delay(3000);
    return 'banana';
}

async function pickFruits(){
  const apple = getApple();
  const banana = getBanana();
  return `${apple}` + `${banana}`;
}

pickFruits().then(console.log)


// 3. useful promise apis
function pickAllFruits(){
    return Promise.all(
        ([getApple(), getBanana()])
    ).then(fruits =>fruits.join(`+`)
    );
}

pickAllFruits().then(console.log);
