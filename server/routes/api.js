const express = require('express')
const gptRouter = require('../routes/gpt/gpt.router');

const api=express.Router()

api.use('/gpt',gptRouter)

module.exports=api;