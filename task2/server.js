

const http = require('http');

//   server that listens on port 3000
const server = http.createServer((req, res) => {
    // Checking the path
    if (req.url === '/') {
        // Setting content type
        res.writeHead(200, { 'Content-Type': 'text/html' });
        // Sending response body
        res.end('<h1>Hello Node!!!!</h1>\n');
    } else {
        // Handling other response
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
    }
});

// Server is listening on port 3000
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
