const User=require('../models/user');

async function addUser(req,res){
try{
     let new_kyc_update=new User(req.body);
      let result=await new_kyc_update.save();
      if(result) return res.status(200).send({status:true,result:result});
      return res.status(400).send({status:false,result:"Unable to update KYC"});  
}
catch(error){
    res.status(500).send(error.message);
}
}


module.exports=addUser;