const express = require("express");
const response = require('../config/httpResponses');
const Promise = require('bluebird');
const Query = require('../queries/workerQueries');
const getSqlConnection = require('../config/connectionPool');
const workers = express.Router();

workers.get('/',(req,res)=>{
    return Promise.using(getSqlConnection(),
    conn=>conn.query(Query.getAllWorkers)
    )
    .then((result)=>{
        console.log(`result is : ${result}`)
        return res.status(response.Created.status).json({
            message: response.OK.message,
            result
          });
    })
    .catch(err=>{
        console.log(`error fetching workers ${err}`)
    })
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

