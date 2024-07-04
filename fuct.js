const http = require('http');
const fs = require('fs');
const url = require('url');

let ledStatus = "OFF";

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  
  if (parsedUrl.pathname === '/led_status') {
    if (parsedUrl.query.status) {
      ledStatus = parsedUrl.query.status;
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(ledStatus);
    } else {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(ledStatus);
    }
  } else {
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("404 Not Found");
        return;
      }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    });
  }
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});
