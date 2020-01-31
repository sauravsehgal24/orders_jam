const express = require("express");
const response = require('../config/httpResponses');
const Promise = require('bluebird');
const getSqlConnection = require('../config/connectionPool');
const Query = require('../queries/orderQueries');

const orders = express.Router();

orders.get('/',(req,res)=>{
    return Promise.using(getSqlConnection(),
    conn=>conn.query(Query.getAllOrders)
    )
    .then((result)=>{
        return res.status(response.Created.status).json({
            message: response.OK.message,
            result
          });
    })
    .catch(err=>{
        console.log(`Error fetching orders ${err}`)
        })
})

orders.post('/add',(req,res)=>{
    const order = req.body
    const {title,description,deadline} = order

    return Promise.using(getSqlConnection(),
    conn=>conn.query(Query.insertOne, [title,description,deadline])
    )
    .then((result)=>{
        return res.status(response.Created.status).json({
            message: response.Created.message,
          });
    })
    .catch(err=>{
        console.log(`error adding order ${err}`)
    })
})

orders.delete('/delete',(req,res)=>{
    return res.status(response.Created.status).json({
        message: response.Accepted.message,
        payload
      });
})

module.exports = orders;

