const express = require('express');
const cors = require('cors');
const routs = require('./app');

const { errors } = require('./middleware/middleware');


require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:false}));

const port = process.env.PORT || 3000;

app.use('/',routs);//for testing purposes

// mongoose.connect(process.env.MONGODB_CONNECTION,()=>{
//     console.log("connecting to MongoDB");
//   })

app.use(cors());


app.use((req, res, next) => errors(req, res, next,"Not found",404));

app.use((error,req, res, next) =>{
    res.status(error.status || 500).json({
      error : {
         message :error.message
      }
    })
  })

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
