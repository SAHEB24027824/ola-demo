const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const user_schema=new Schema({
    name:{
        type:String,
         required:true
    },
    phone:{
        type:Number,
    },
    document:{
        name:{
            type:String
        },
        document_number:{
            type:String
        }
    },
    last_update:{
     type:Date,
     default:Date.now
    }
})


const User=mongoose.model('User',user_schema);

module.exports=User;