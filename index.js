const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // if(req.url === '/') {
    //     fs.readFile(
    //         path.join(__dirname, 'public', 'index.html'), 
    //         (err, content) => {
    //             if (err) { throw err };
    //             res.writeHead(200, {'Content-Type': 'text/html'});
    //             res.end(content);
    //         }
    //     );
    // }

    // if(req.url === '/about') {
    //     fs.readFile(
    //         path.join(__dirname, 'public', 'about.html'), 
    //         (err, content) => {
    //             if (err) { throw err};
    //             res.writeHead(200, {'Content-Type': 'text/html'});
    //             res.end(content);
    //         }
    //     );
    // }

    // if(req.url === '/api/users') {
    //     const users = [
    //         {name: 'Bob', age: 59},
    //         {name: 'Jane', age: 76}
    //     ];
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //     res.end(JSON.stringify(users));
    // }

    // Above code is looking for each file and then running the code,
        // below we have simplified it and automated most of the process to load each path

    // Build file path
    let filePath = path.join(__dirname, 'public', 
        req.url === '/' ? 'index.html' : req.url );
    // Extension of file
    let extname = path.extname(filePath);
    // Initial content
    let contentType = 'text/html';

    switch (extname) { // this will check between each file type to correctly display file
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    //read file
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code == 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'),
                (err, content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html'});
                    res.end(content, 'utf8');
                })
            } else {
                // Some server error 
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // Success
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    });
});

const PORT = process.env.PORT || 5000; // default 5000 or if different will populate with current
server.listen(PORT, () => console.log(`Server running on PORT ${PORT}`)); // server listens on the port and logs it