const User=require('../models/user');

async function getAllUser(req,res){
try{
    let user_id=req.params.id;
    let result=await User.find();
      if(result.length!=0) return res.status(200).send({status:true,result:result});
      return res.status(404).send({status:false,result:"User Not found"});  
}
catch(error){
    res.status(500).send(error.message);
}
}


module.exports=getAllUser;