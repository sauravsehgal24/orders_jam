const express = require("express");
const response = require('../config/httpResponses');


const orders = express.Router();

orders.get('/',(req,res)=>{
})

orders.post('/add',(req,res)=>{
    return res.status(response.Created.status).json({
        message: response.OK.message,
      });
})

orders.delete('/delete',(req,res)=>{
    return res.status(response.Created.status).json({
        message: response.Accepted.message,
        payload
      });
})

module.exports = orders;

