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