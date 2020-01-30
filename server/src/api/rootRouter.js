const express = require('express');
const workerRouter = require('./workerRouter');
const orderRouter = require('./orderRouter');
const orderWorkerRouter = require('./orderWorkerRouter');
const rootRouter = express.Router();

rootRouter.use('/worker', workerRouter);
rootRouter.use('/order', orderRouter);
rootRouter.use('/orderWorker', orderWorkerRouter);

module.exports = rootRouter;