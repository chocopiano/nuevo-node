const http = require('http');
http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'wene',
            edad: 32
        }
        res.write(JSON.stringify(salida));
        //res.write('Hola mundo');
        res.end();
    })
    .listen(8080)

console.log('ESCUAHDNO EL PUERTO 8080');