const mongoose = require('mongoose');


const projectImageSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
        require:true,
        minLength:1
    },
    projectImage:{
        type:String,
        require:true,
    }
})

module.exports = mongoose.model('ProjectImage',projectImageSchema);