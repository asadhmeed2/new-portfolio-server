const express = require('express');
const resumeRoutes = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        console.log(__dirname);
        cb(null,path.join(__dirname, '../uploads/resume'))
    },
    filename: function(req,file,cb){
        console.log(file);
        cb(null, `${new Date().toISOString().replace(/:/g, '-')}-${file.originalname}`);
    }
});

const fileFilter =(req, file, cb) =>{
    if(file.mimetype ==='application/vnd.openxmlformats-officedocument.wordprocessingml.document' || file.mimetype ==='application/pdf'){
        cb(null,true);
    }else{
        cb(null,false);
    }
}

const upload = multer({storage: storage, limits:{
    fileSize: 1024 * 1024 * 10,
    },fileFilter:fileFilter
});


resumeRoutes.post('/', upload.single('resume'), function (req, res, next) {
    // req.file is the `resume` file
    // req.body will hold the text fields, if there were any
    res.status(200).json({message:'successfully uploaded the resume'})
  })

resumeRoutes.get('/', (req, res) => {
    res.status(200).json({message: 'get image'});
})

module.exports = resumeRoutes;