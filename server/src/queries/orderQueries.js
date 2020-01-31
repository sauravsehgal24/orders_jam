module.exports = {

    insertOne: 'INSERT INTO orders (orderId, title, description , deadline) VALUES (uuid(),?, ?, ?)',

    getAllOrders:'select * from orders order by deadline',

    deleteOrderById:'delete from orders where orderId = ?',

    findIdByUsername: 'SELECT userId FROM users WHERE username = ?',
    
    findUserByUsername: 'SELECT * FROM users WHERE username = ?',

    findUserByEmail: 'SELECT * FROM users WHERE email = ?',
  };