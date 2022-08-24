const express = require('express');
const resumeRoutes = express.Router();




resumeRoutes.get('/', (req, res) => {
    res.status(200).json({message: 'get resume'});
})

module.exports = resumeRoutes;