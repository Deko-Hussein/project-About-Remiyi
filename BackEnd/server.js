const express = require("express")
const mongoose= require("mongoose")
const FarmRouter= require("./Router/FarmRouter")
// const cros = require("cors")
const App = express()

App.use(express.json())

App.use(FarmRouter)
mongoose.connect("mongodb://localhost:27017/Remiyi").then(()=>{
    console.log("Database  has been connected")
}).catch((error)=>console.log(error))

// App.use(cros())

App.listen(6000,()=>{
    console.log("server is running on port 6000")
})