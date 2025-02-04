

// const multer = require("multer");

// const imgLocation = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null, "image")
//     },
//     fileName:(req,file,cb)=>{
//         cb(null,file.originalname)
//     }
// })

// const uploadImg =multer({
//     storage:imgLocation
// })

// module.exports =uploadImg
const multer = require("multer");

// Define storage configuration for multer
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         // Make sure the folder exists (you can create it manually or ensure with fs)
//         cb(null, "image"); // Saving files to the "image" folder
//     },
//     filename: (req, file, cb) => {
//         // Ensure filename handling (originalname might be needed)
//         cb(null, Date.now() + "-" + file.originalname); // Unique filename
//     }
// });

// // Configure multer middleware
// const uploadImg = multer({ storage: storage });

// module.exports = uploadImg;


// const multer=require("multer")

const imgLocation = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, "Images")
    },
    filename:(req,file, cb)=>{
        cb(null, file.originalname)
    }
})

const uploadImg = multer({
    storage: imgLocation
})
  
module.exports = uploadImg