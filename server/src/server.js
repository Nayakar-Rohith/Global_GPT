const http=require('http');
const express=require('express');
const app=require('./app')


const PORT=process.env.PORT || 4000;
const server=http.createServer(app)
server.listen(PORT,()=>{
    console.log(`server is connected to port number ${PORT}`)
})
