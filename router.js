const express=require('express');
const router=express.Router();


//=====controllers===
const addUser=require('./controller/adduser')
const getAllUser=require('./controller/getAlluser')
const getOneUser=require('./controller/getOneUser')


router.post('/user',addUser);
router.get('/user/:id',getOneUser);
router.get('/user',getAllUser);

module.exports=router;
