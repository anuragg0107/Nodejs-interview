const http = require("http");
const fs = require("fs");
const url = require('url');

const myServer = http.createServer((req, res) => {
    if(req.url === "/favicon.ico"){
        return res.end()
    }
  const log = `${Date.now()} : ${
    req.url
  } : New request received\n`;
   const myUrl = url.parse(req.url, true);
   console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("This is home page");
        break;
      case "/about":
        res.end("this is about page");
        break;
      default:
        res.end("Page not found go to home page");
    }
  });
});

myServer.listen(3000, () => {
  console.log("Server is running on port 3000");
});
