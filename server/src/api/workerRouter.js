const express = require("express");
const response = require('../config/httpResponses');
const workers = express.Router();

workers.get('/',(req,res)=>{
    return res.status(response.Created.status).json({
        message: response.OK.message,
      });
})

workers.post('/add',(req,res)=>{
    return res.status(response.Created.status).json({
        message: response.OK.message,
      });
})

workers.delete('/delete',(req,res)=>{
    return res.status(response.Created.status).json({
        message: response.Accepted.message,
      });
})

module.exports = workers;

