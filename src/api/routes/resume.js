const express = require('express');
const resumeRoutes = express.Router();

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./uploads/resume')
    },
    filename: function(req,file,cb){
        cb(null, `${file.originalname}`);
    }
});

// const fileFilter =(req, file, cb) =>{
//     if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
//         cb(null,true);
//     }else{
//         cb(null,false);
//     }
// }

const upload = multer({storage: storage, limits:{
    fileSize: 1024 * 1024 * 10,
    },fileFilter:fileFilter
});


resumeRoutes.post('/resume', upload.single('resume'), function (req, res, next) {
    // req.file is the `resume` file
    // req.body will hold the text fields, if there were any
  })

resumeRoutes.get('/', (req, res) => {
    res.status(200).json({message: 'get image'});
})

module.exports = resumeRoutes;