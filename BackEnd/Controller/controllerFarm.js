// const inforFarmModel=require("../model/InformationFarm")

// const createFarm = async(req,res)=>{
//         try{
//             const newData =inforFarmModel({
//                 name:req.body.name,
//                 Address:req.body.Address,
//                 email:req.body.email,
//                 Passaword:req.body.Passaword,
//                 Price:req.body.Price
//             })
//             const SaveData= await newData.save()
//             if(SaveData){
//                 res.send(SaveData)
//             }
//         }
//         catch(error){
//             console.log(error)
//         }
// }
// module.exports ={createFarm}

// const inforFarmModel = require("../models/InformationFarm");

// const createFarm = async (req, res) => {
//     try {
//         const newData = new inforFarmModel(req.body);

//         const saveData = await newData.save();  

//         if (saveData) {
//             res.send(saveData)
//         }
//     } catch (error) {
//         console.log(error);
//     }
// };

// module.exports = { createFarm }



const inforFarmModel=require("../models/InformationFarm")

//create data
const createFarm = async(req,res)=>{
    try{
        const newData =inforFarmModel(req.body)
        const saveDate =  await newData.save()
        if(saveDate){
            res.send(saveDate)
        }

    }catch(error){
        console.log(error)
    }
}

//Read Data

const readData = async(req, res)=>{
        try{
            const getData =await inforFarmModel.find()
            if(getData){
                res.send(getData)
            }
        }catch(error){
            console.log(error)
        }
}

//read single product
const readSingleData =async (req,res)=>{
        try{
            const getSingleData =await inforFarmModel.find({_id:req.params.id})
            if(getSingleData){
                res.send(getSingleData)
            }
        }
        catch(error){
            console.log(error)
        }
}

// update
const updateFarm =async(req,res)=>{
    try{
        const putData  =await inforFarmModel.updateOne(
            {_id:req.params.id},
            {$set:{
                name:req.body.name,
                description:req.body.description,
                price: req.body.price,
                image: req.file.filename
            }}
        )
        if(putData){
            res.send("update success")
        }
    }
    catch(error){
        console.log(error)
    }
}

//Delete data 
const FarmDelete = async(req,res)=>{
    try{
        const removeData= await inforFarmModel.deleteOne(
            {_id:req.params.id},
           
        )
        if(removeData){
            res.send("Delete Data is success ful")
        }
    }
    catch{
        console.log(error)
    }
}

module.exports={createFarm,readData,readSingleData, updateFarm,FarmDelete }