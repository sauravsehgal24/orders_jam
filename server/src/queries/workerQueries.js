module.exports = {

    insertOne: 'INSERT INTO workers (workerId, orderId ,name, company ,email) VALUES (uuid(),null ,?, ?, ?)',

    findIdByUsername: 'SELECT userId FROM users WHERE username = ?',
    
    findUserByUsername: 'SELECT * FROM users WHERE username = ?',

    findUserByEmail: 'SELECT * FROM users WHERE email = ?',
  };