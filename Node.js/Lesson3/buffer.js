const buffer = Buffer.from('저를 버퍼로 바꿔보세요.');
// 2진법을 16진법으로 바꾼게 -> buffer


console.log(buffer);
console.log(buffer.length); //33 byte
console.log(buffer.toString()); // 다시 글자로 변환

//buffer 여러개
const array = [Buffer.from('띄엄'), Buffer.from('띄엄'), Buffer.from('띄엄')]; 
//다시 합칠 수 있음
console.log(Buffer.concat(array).toString());

// 빈버퍼를 만들기 , 5byte빈 버퍼 만들기
Buffer.alloc(5);

console.log(Buffer.alloc(5));