const fs = require('fs');

// Create File

// Async 
// fs.writeFileSync("text.txt","Hey anurag")

// Sync
// fs.writeFile("text.txt","Hey anurag with sync",(err)=>{
//     console.log(err);
// })


// Read File

// Async
// const result = fs.readFileSync("Contact.txt","utf-8");
// console.log(result);

// Sync
// fs.readFile("Contact.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error",err);
//     }
//     else{
//         console.log(result);
//     }
// })


// Update file

// sync file
// const result = fs.appendFileSync("text.txt",new Date().toLocaleDateString())
// console.log(result)



// Delete file

// sync file

// fs.unlinkSync("new.txt")


//Copy file 

// Sync file
// fs.cpSync("text.txt","Copy.txt")

// Create Folder
// Sync File
// fs.mkdirSync("New Folder")

// fs.mkdirSync("new1/image/a",{recursive:true})

const os= require('os')
console.log(os.cpus().length)
