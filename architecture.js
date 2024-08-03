const fs = require('fs');
// to check operating system thread pool
const os = require('os');

// console.log(os.cpus().length);


// Node js architecture

// First client/user make an request it will go to event queue.
// Event queue work on FIFo(First In First Out).
// Then it will go to Event Loop. It will check is there any request or not?
// Now we have Two operation Blocking(Sync) & Non-Blocking(Async) Operation.
// Non-Blocking(Async) will check and immedieatly return result.
// Non-Blocking(Async) is not waiting it will execute who is faster.
// console.log('1');
// fs.readFile("text.txt","utf-8",(err,result)=>{
//     if(err){
//     console.log(err)
// }
// else{
//     console.log(result);
// }
// })
// console.log('2');
// console.log('3');
// console.log('4');
// Blocking(Sync) Operation will go to thread pool (default thread pool are 4).
// Thread pool assign a task to thread.
// Once the thread is completed then it will return an request.
// Blocking opeartion is waiting and go with the flow 
// console.log("1")
// const result= fs.readFileSync("text.txt","utf-8");
// console.log(result);
// console.log('2');
// console.log('3');
// console.log('4');

