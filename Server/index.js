// const http = require("http");
const express = require('express');

// this app is our myHandler funcation on express js to run our get ,post,put,patch delte method
const app = express();

// with express js
app.get('/',(req,res)=>{
  res.send("Hello from home page ds")
})

app.get('/about',(req,res)=>{
  res.send("hello from about page")
})

// app.post('/',(req,res)=>{

// })


app.listen(3000,()=>{
  console.log("Server is running at port 3000")
})
// const myServer = http.createServer(app);

// myServer.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });


// const fs = require("fs");
// const url = require('url');
// Without Express Js
// function myHandler(req, res) {
//   if(req.url === "/favicon.ico"){
//       return res.end()
//   }
// const log = `${Date.now()} : ${
//   req.url
// } : New request received\n`;
//  const myUrl = url.parse(req.url, true);
//  console.log(myUrl);
// fs.appendFile("log.txt", log, (err, data) => {
//   switch (req.url) {
//     case "/":
//       res.end("This is home page");
//       break;
//     case "/about":
//       res.end("this is about page");
//       break;
//     default:
//       res.end("Page not found go to home page");
//   }
// });
// }