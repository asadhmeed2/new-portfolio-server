const express = require('express');
const imageRoutes = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./uploads/images')
    },
    filename: function(req,file,cb){
        cb(null, `${file.originalname}`);
    }
});

const fileFilter =(req, file, cb) =>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null,true);
    }else{
        cb(null,false);
    }
}

const upload = multer({storage: storage, limits:{
    fileSize: 1024 * 1024 * 10,
    },fileFilter:fileFilter
});


  imageRoutes.post('/projects/images', upload.single('projectImage'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
  })

imageRoutes.get('/', (req, res) => {
    res.status(200).json({message: 'get resume'});
})

module.exports = imageRoutes;