const mongoose = require("mongoose")

const FarmSchema = mongoose.Schema({
        name:{
            type:String,
            required: true
        },
        Address:{
            type:String,
            required: true
        },
        email:{
            type:String,
            required: true
        },
        Passaword:{
            type:Number,
            required: true
        },
        
        Price:{
            type:Number,
            required: true
         },
         //image:{
        //              type:String,
        //              required:true
        //        }

},
{
    timestemps:true
}

// name:{
//         type:String,
//         required:true
//     },
//     description:{
//         type:String,
//         required:true
//     },
//     price:{
//         type:Number,
//         required:true
//     },
//     image:{
//         type:String,
//         required:true
//     }
    
// },
// {
//     timestemps:true
// }
 )

 module.exports=mongoose.model("FarmInfor",FarmSchema)