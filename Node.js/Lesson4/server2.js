//server2 .html읽어오기


const http = require('http');

const fs = require('fs').promises;

const server = http.createServer(async(req, res) =>{

    try{
        const data = await fs.readFile('./server2.html');
        res.end(data);
    }catch(error){
        console.log(err);
        res.writeHead(200, {'Content-Type' :'text/plain; charset =utf-8'});
        res.end(err.message);
    }

})


.listen(8080);

server.on('listening', () =>{
    console.log('8080 server on');
})

server.on('error' , (error) =>{
    console.log(error);
})