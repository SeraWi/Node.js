// Javascript is synchronous. 동기적이다
// Execute the code block by orger after hoisting.
// hoisiting: var, function declaration

console.log('1');
setTimeout(function(){// 비동기
console.log('2');
}, 1000);
setTimeout(()=>console.log('2'), 1000);
console.log('3');


//synchronous callback
function printImmediately(print){
    print();
}

printImmediately(() => console.log('hello'));

// asynchronous callback

function printWithDelay(print, delay){
    setTimeout(print, delay);
}

printWithDelay(() => console.log('async callback'), 2000);


// callback hell example

class UserStrogae{
    loginUser(id, password, onSuccess, onError){
        setTimeout(() =>{
            if(
                (id == 'ellie' && password === 'dream')||
                (id =='coder' && password === 'academy')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        }, 2000);

    }
    getRoles(user, onSuccess, onError){
        setTimeout(()=>{

            if(user === 'ellie'){
                onSuccess({name : 'ellie' , role :'admin'});
            }else{
                onError(new Error('no access'));
            }
        },1000);
    }
}

const userStorage = new UserStorage();
const id = promt('enter your id');
const password = promt('enter your password');

userStorage.loginUser(
    id,
    password,
    user =>{
        userStorage.getRoles(
            user, 
            userWithRole =>{
                alert(`hello ${user.name} , you have a ${userWithRole.role} role`);
            },
            error =>{console.log(error)}
        );
    },
    error =>{console.log(error)}
);