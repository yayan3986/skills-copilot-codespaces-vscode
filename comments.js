// Create web server
// Create a web server that listens to requests on port 3000. The server should respond to requests to the /comments endpoint with a JSON object consisting of an array of comments.
// The comments array should have 3 comments in it, each of which is an object with a username and message key.

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/comments') {
        const comments = [
            { username: 'Alice', message: 'I love apples' },
            { username: 'Bob', message: 'I love oranges' },
            { username: 'Charlie', message: 'I love bananas' }
        ];

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(comments));
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

// Run the server in the terminal
// node comments.js
// Output: Server is listening on port 3000

// Open your browser and go to http://localhost:3000/comments
// Output: [{"username":"Alice","message":"I love apples"},{"username":"Bob","message":"I love oranges"},{"username":"Charlie","message":"I love bananas"}]

// Open your browser and go to http://localhost:3000/unknown
// Output: Not Found

// To stop the server, press Ctrl + C in the terminal
// Output: ^C
// Output: Server is listening on port 3000
// Output: ^C
// Output: Server is listening on port 3000
// Output: ^C
// Output: Server is listening on port 3000

// To stop the server, press Ctrl + C in the terminal

