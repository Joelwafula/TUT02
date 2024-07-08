const fsPromises = require('fs').promises;

const path = require("path")

const fileOps = async ()=>{

    try{
        const data = await fsPromises.readFile(path.join(__dirname,'files','starter.txt'),'utf8');
        console.log(data)

    }catch (err){
        console.log(err)
    }

}

fileOps();

const oldPath = path.join(__dirname,'files','reply.txt')

const newPath = path.join(__dirname,'files', 'newName.txt')

fs.readFile(path.join(__dirname,"files","starter.txt"),"utf8",(err,data)=>{
    if(err) throw err;

    console.log(data)
})

// fs.writeFile(path.join(__dirname,'files',"reply.txt"),"its nice to know you",(err)=>{
//     if(err) throw err;

//     console.log("The write is complete")

//     fs.appendFile(path.join(__dirname,'files','reply.txt'),"\n\n yes it is",(err)=>{
//         if (err) throw err

//         console.log("File has been appended sucessfully")
//     })

//     fs.rename(oldPath,newPath,(err)=>{
//         if (err) throw err

//         console.log("File has been renamed sucessfully")
//     })


// })

fs.appendFile(path.join(__dirname,"files","test.txt"),"hello",(err)=>{
    if (err) throw err

    console.log("file has been appended sucessfully")
})

//using process to get the uncaught errors

process.on("uncaughtException", err =>{
    console.error(`There was an uncaught error ${err}`)

    process.exit(1)
})

