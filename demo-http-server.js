const { timeStamp } = require('console');
const http = require('http');
const hostname = 'localhost';
const port = 3000
const server = http.createServer((req, res) =>{
        if (req.url === '/about'){
                res.statusCode = 200;
                res.setHeader('Content-Type', 'Text/plain');
                res.end('About Page\n');
        } else if (req.url === '/contact'){
                res.statusCode = 200;
                res.setHeader('Content-Type', 'Text/plain');
                res.end('Contact Page\n');
        } else if (req.url === '/api') {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'Text/plain');
            const data = {
                    message: 'Hello from API',
                    timestamp: new Data().toISOSstring()
            };
            res.end(JSON.stringify(data));
        }
        else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'Text/plain');
            res.end('Hello, World!\n');
        }
});
server.listen(port, hostname, () => {
            console.log(`Server running at http://${hostname}:${port}/`);
});
