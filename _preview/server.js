const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 4000;
const ROOT = path.join(__dirname, '..');

const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
};

http.createServer((req, res) => {
  let url = req.url.split('?')[0];
  let filePath;

  if (url === '/' || url === '/index.html') {
    filePath = path.join(__dirname, 'index.html');
  } else if (url === '/print') {
    filePath = path.join(__dirname, 'index.html');
  } else {
    filePath = path.join(ROOT, url);
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
}).listen(PORT, () => {
  console.log(`Preview server running at http://localhost:${PORT}`);
});
