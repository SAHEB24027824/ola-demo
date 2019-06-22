const User=require('../models/user');

async function getOneUser(req,res){
try{
    let user_id=req.params.id;
    let result=await User.findOne({_id:user_id});
      if(result) return res.status(200).send({status:true,result:result});
      return res.status(404).send({status:false,result:"User Not found"});  
}
catch(error){
    res.status(500).send(error.message);
}
}


module.exports=getOneUser;