const mongoose=require('mongoose');

function db_connection(db_path){
    return new Promise(async(resolve,reject)=>{
        try{
            let result=await mongoose.connect(db_path,{useNewUrlParser:true});
        if(result){
            resolve('Database connected');    
        }
        else{
            reject(new Error('Unable to connect Database'))
        }
        }
        catch(error){
            console.log('Unable to connect Database')
        }
        
    })
}

module.exports=db_connection;

