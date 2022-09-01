const { default: mongoose } = require('mongoose');
const projectImageModel = require('../models/projectImage.model');


exports.getAllImages = async (req, res, next) => {
    try{
        const results = await projectImageModel.find({}).select('name projectImage');
        const response = {
            count: results.length,
            projectImage: results,
        }
        res.status(200).json(response)
    }catch(err){
        console.log(err);
        res.status(500).json({
            error: err
        });
    }
}

exports.getImageById = async (req, res, next) =>{
    const id = req.params.productId;
    console.log(id);
    try{
        const result = await projectImageModel.findById(id);
        if(result){
            res.status(200).json(result);
        }else {
            res.status(404).json({
                message: "404 not found"
            })
        }
    }
   catch(err){
        console.error(err.message);
        res.status(500).json({
            error: err
        });
    }
}
exports.uploadImage = async (req, res, next) =>{
    try{
        console.log(req.file);
        const result = await projectImageModel.create({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            projectImage: req.file.path
        })
        console.log(result);
        if(result){
            return res.status(200).json({
                message:"adding an Image",
                createdImage:product
            })
        }
    }
   catch(err){
        console.error(err.message);
        res.status(500).json({
            error: err
        });
    }
}