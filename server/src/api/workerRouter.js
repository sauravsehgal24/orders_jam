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

    const worker = req.body
    const {name,company,email} = worker

    return Promise.using(getSqlConnection(),
    conn=>conn.query(Query.insertOne, [name,company,email])
    )
    .then((result)=>{
        return res.status(response.Created.status).json({
            message: response.Created.message,
          });
    })
    .catch(err=>{
        console.log(`error adding worker ${err}`)
    })

})

workers.delete('/delete',(req,res)=>{
    const worker = req.body
    const {workerId} = worker

    return Promise.using(getSqlConnection(),
    conn=>conn.query(Query.deleteWorkerById, [workerId])
    )
    .then((result)=>{
        return res.status(response.OK.status).json({
            message: response.OK.message,
          });
    })
    .catch(err=>{
        console.log(`error deleting worker ${err}`)
    })
})

module.exports = workers;

