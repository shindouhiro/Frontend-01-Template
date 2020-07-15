const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request received');
  console.log(req.headers);
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('X-Foo', 'bar');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`
  <html maaa=a >
  <head>
      <style>
      #container {
          width: 400px;
          height: 400px;
          display: flex;
          background-color: rgb(255,255,255);
      }
      #container #myid {
          width: 200px;
          height: 100px;
          background-color: rgb(255,182,193);
      }
      #container .c1 {
          width: 200px;
          flex: 1;
          background-color: rgb(29,105,29);
      }
      </style>
  </head>
  <body>
      <div id="container">
        <div id="myid"></div>
        <div class="c1"></div>
      </div>
  </body>
 </html>
  `);
})

server.listen(8088);