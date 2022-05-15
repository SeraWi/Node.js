const fs =require('fs');

const readStream = fs.createReadStream('./readme3.txt', {highWaterMark: 16}); // 16 byte씩 데이터 끊어서 보내기

const data =[];

// stream 비동기임
// 조각조각 전송받음
readStream.on('data',(chunk) =>{
    data.push(chunk); //data 배열에 넣기
    console.log('data:', chunk, chunk.length );
});

readStream.on('end', ()=>{ // stream 끝나면 -> data 배열 모두 합쳐서 출력
    console.log('end', Buffer.concat(data).toString());
});

readStream.on('error', (err) =>{
    console.log('error', err);

})

// 스트림 방식의 장점 : 16바이트씩 짤라서 보내기 때문에  메모리 관리에 효율적
// 버퍼의 경우 한번에 다 보낸다.

