const express = require("express");
const response = require('../config/httpResponses');
const Query = require('../queries/orderWorkerQueries');
const Promise = require('bluebird');
const getSqlConnection = require('../config/connectionPool');
const ordersWorkers = express.Router();

ordersWorkers.post('/link',(req,res)=>{
    const ow = req.body
    const {workerId,orderId} = ow

    return Promise.using(getSqlConnection(),
    conn=>conn.query(Query.linkOrderAndWorker, [workerId,orderId])
    )
    .then((result)=>{
        return res.status(response.Created.status).json({
            message: response.Created.message,
          });
    })
    .catch(err=>{
        console.log(`error linking worker ${err}`)
    })
})


module.exports = ordersWorkers;

