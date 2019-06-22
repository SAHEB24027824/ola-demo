const db_connection=require('./dbconnection/db_connection');
const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const router=require('./router')

let port=process.env.PORT||3000;

async function dbConnection(){
    let path="mongodb://localhost/ola_demo"
try{
    let result=await db_connection(path);
    if(result) console.log("Database Connected")
}
catch(error){
    console.log(error.message)
}
}
dbConnection(); // Database connection
// creating Server
app.listen(port,()=>{
    console.log(`Server connected to port no - ${port}`)
})


app.use(bodyParser.json());
app.use(router);
