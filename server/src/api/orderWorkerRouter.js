const express = require("express");
const response = require('../config/httpResponses');
const ordersWorkers = express.Router();

ordersWorkers.get('/',(req,res)=>{
    return res.status(response.Created.status).json({
        message: response.OK.message,
        payload
      });
})

ordersWorkers.post('/add',(req,res)=>{
    return res.status(response.Created.status).json({
        message: response.OK.message,
      });
})

ordersWorkers.delete('/delete',(req,res)=>{
    return res.status(response.Created.status).json({
        message: response.Accepted.message,
        payload
      });
})

module.exports = ordersWorkers;

