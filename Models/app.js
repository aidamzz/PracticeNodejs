const { error } = require('console')
const fs = require('fs')
// Writing file
// fs.writeFile('example.txt', 'some text', (error)=>{
//     if(error){
//         console.log(error)
//     }
// })  //if there is no example file it will be created if there is it would be overwrite

// Reading file
fs.readFile('example.txt', 'utf-8', (err, data)=>{
    if(err){
        console.log(err)
        return
    }
    console.log('File Data\n' + data)
})

//Deleting File

fs.unlink('example.txt', (err)=>{
    if(err){
        console.log(err)
    }
})