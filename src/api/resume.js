const express = require('express');
const resumeRoutes = express.Router();



resumeRoutes.post('/resume', upload.single('resume'), function (req, res, next) {
    // req.file is the `resume` file
    // req.body will hold the text fields, if there were any
  })

  resumeRoutes.post('/projects/images', upload.single('projectImage'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
  })

resumeRoutes.get('/', (req, res) => {
    res.status(200).json({message: 'get resume'});
})

module.exports = resumeRoutes;