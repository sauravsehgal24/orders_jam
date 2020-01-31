module.exports = {

    insertOne: 'INSERT INTO workers (workerId, name, company ,email) VALUES (uuid(),?, ?, ?)',

    getAllWorkers:'select * from workers',

    deleteWorkerById:'delete from workers where workerId = ?',

    findIdByUsername: 'SELECT userId FROM users WHERE username = ?',
    
    findUserByUsername: 'SELECT * FROM users WHERE username = ?',

    findUserByEmail: 'SELECT * FROM users WHERE email = ?',
  };