
// const express = require("express");
// const FarmController = require("../Controller/controllerFarm");
// // const uploadImg = require("../MiddelWare/ImageLocation");

// const router = express.Router();

// router.post("/Farm/create", FarmController.createFarm);

// module.exports = router;


const express =require("express")
const farmController=require("../Controller/controllerFarm")
// const uploadImg= require("../middlewar/imageUpload")
 
const router =express.Router()
router.post("/Farm/create",farmController.createFarm)
router.get("/Farm/read/:id",farmController.readData)
router.get("/product/readSingle/:id",farmController.readSingleData)
router.put("/product/update/:id",farmController.updateFarm)
router.delete("/product/delete/:id",farmController.FarmDelete)
module.exports =router