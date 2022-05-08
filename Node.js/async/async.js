const { rulesToMonitor } = require("nodemon/lib/monitor/match");

function timer (time){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(time);
        },time);
    });
}

async function run(){// promise 반환
    console.log('start');
    var time = await timer(1000); // then안의 결과값을 리턴값으로 받는다.
    console.log('time :' + 1000);
    time = await timer(time + 1000);
    console.log('time : ' + time);
    time = await timer(time + 1000);
    console.log( 'time : ' + time);
    console.log('end');
    return time;
}
//run();

async function run2(){
    console.log('parent start');
    var time = await run();
    console.log(time); 
    console.log('parent end');
    
}

run2();
run2().then(function(){
    console.log('parent parent end');
})