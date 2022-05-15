const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./readme3.txt',{highWaterMark:16});

// 압축스트림
const zlibStream = zlib.createGzip();
// 16바이트씩 읽어서, writeme3에 16바이트씩 서준다. ->파이핑
// gz : 압축
const writeStream = fs.createWriteStream('./writeme3.txt.gz');

//readStream.pipe(writeStream);

// pipe 여러번 연결 가능
readStream.pipe(zlibStream).pipe(writeStream);