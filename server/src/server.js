const http=require('http')
const app=require('./app')
// const {loadPlanetsData}=require('../models/planets.model')
// const {loadLaunchesData}=require('../models/launches.model')
const mongoose=require('mongoose');
// const {connectToMongo}=require('../services/mongo')
require('dotenv').config();
const PORT=process.env.PORT

const server= http.createServer(app);

async function loadServer(){
    // await connectToMongo();
    // await loadPlanetsData();
    // await loadLaunchesData();
    server.listen(PORT,()=>{
        console.log(`server is listening to port number ${PORT}............`)
    })
}
loadServer()