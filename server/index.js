const http = require('http');
const PORT = 80;

function onRequest(req, res){
    console.log('request', req)
    res.writeHead(200);
    res.end("Halo, Ini dari server");
}

const server = http.createServer(onRequest);

server.listen(PORT, '127.0.0.1', ()=>{
    console.log("SERVER SUDAH BERJALAN, SILAKAN DIBUKA https://127.0.0.1:%d", PORT);
})