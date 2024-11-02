const express =require('express');
const {handlePostGPT}=require('./gpt.controller')
const router=express.Router();

router.post('/',handlePostGPT);

module.exports=router;