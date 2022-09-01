const express = require('express');
const imageRoutes = express.Router();
const multer = require('multer');
const path = require('path');
const { uploadImage } = require('../controllers/projectImage.controller');

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,path.join(__dirname, '../uploads/images'))
    },
    filename: function(req,file,cb){
        console.log(file);
        cb(null, `${new Date().toISOString().replace(/:/g, '-')}-${file.originalname}`);
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


  imageRoutes.post('/', upload.single('projectImage'), uploadImage)

imageRoutes.get('/', (req, res) => {
    res.status(200).json({message: 'get resume'});
})

module.exports = imageRoutes;