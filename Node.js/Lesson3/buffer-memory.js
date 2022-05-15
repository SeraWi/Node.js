const fs = require('fs');

console.log('before:' , process.memoryUsage().rss);

// 1기가 짜리 파일 통째로 읽어오기 (버퍼 통째로)
const data1 = fs.readFileSync('./big.txt');
fs.writeFileSync('./big2.txt', data1);

console.log('buffer:', process.memoryUsage().rss);

// before:   19804160
// buffer: 1060769792