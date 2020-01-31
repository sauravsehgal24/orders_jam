module.exports = {

    linkOrderAndWorker: 'INSERT INTO ordersAndWorkers (id,workerId,orderId ) VALUES (uuid(),?, ?)',

};