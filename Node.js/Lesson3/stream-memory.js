const fs = require('fs');

console.log('before:' , process.memoryUsage().rss);

// 스트림 방식 (쪼개서 계속 옮긴다. -> 메모리에 효율적)
const readStream = fs.createReadStream('./big.txt');
const writeStream = fs.createWriteStream('./big3.txt');

readStream.pipe(writeStream);
readStream.on('end', () =>{
    console.log('stream :' , process.memoryUsage().rss);
})

// before:  19795968                                              >
// stream : 41078784