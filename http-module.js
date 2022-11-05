const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Hello page!');
    }
    
    if (req.url === '/about') {
        res.end('About page');
    }

    res.end(`
        <h1>Error page</h1>
    `);
});

server.listen(3333);