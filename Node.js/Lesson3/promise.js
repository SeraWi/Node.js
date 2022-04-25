// Promise : 내용이 실행은 되었지만, 결과를 아직 반환하지 않은 객체
// Then 을 붙이면 결과를 반환함

const { resolveObjectURL } = require("buffer");
const { resolve } = require("dns");
const res = require("express/lib/response");

// 콜백 : 바로 실행함
// Resolve(성공리턴값) ->then 으로 연결
// Reject( 실패 리턴값) -> catch 로 연결

// Async/ await

async function findAndSaveUser(users){
    let user = await users.findOne();
    user.name = 'zero';
    user = await user.save();
    user = await users.findOne();
}


// const promise2 = new Promise(...)

// promise.then((result)= >...)


// async function main(){
//     try{
//         const result = await promise;
//         return result;
//     }catch(error){
//         console.log(error);
//     }
// }

// const result = await promise;

// main().then((name) =>...)


/////////////////////////////////
// Promise is a Javascript object for asynchronous operation
// state : pending => fulfilled or rejected
// producer and consumer

// 1. Producer
// when new Promise is created, the executor runs automatically
const promise = new Promise((resolve, reject) =>{
    //doing some heavy work( network, read files)
    console.log('doing something');
    setTimeout(()=>{
        resolve('ellie'); 
        reject(new Error('no network'));
    }, 2000);
});


// 2. Consumers : then, catch , finally

promise
  .then((value) =>{
    console.log(value);
})
.catch(error =>{
    console.log(error);
})
.finally(() => console.log('finally'));


// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject)=>{
    setTimeout(() => resolve(1), 1000); 
});

fetchNumber
.then(num => num *2)
.then(num => num *3)
.then(num =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>resolve(num -1), 1000);
    });
})
.then(num => console.log(num));

// 4. error handling
const getHen = ()=>
 new Promise((resolve, reject) => {
     setTimeout(() => resolve('chicken'), 1000);
 });
 
 const getEgg = hen =>
    new Promise((resolve, reject) =>{
        setTimeout(() => resolve(`${hen} => egg`), 1000);
});

 const cook = egg =>
     new Promise((resolve, reject) =>{
         setTimeout(() =>resolve(`${egg} => EGG Fries`), 1000);
})

getHen()
.then(hen => getEgg(hen))
.then(egg => cook(egg))
.then(meal => console.log(meal));
 
getHen()
.then(getEgg)
.catch(error => { //egg 가 없으면 bread 전달
    return 'bread';
})
.then(cook)
.then(console.log)
.catch(console.log)


// 5. callback hell 해결하기
// callback to promise

