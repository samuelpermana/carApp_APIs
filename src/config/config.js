const mysql = require('mysql2');

// Create the connection pool
const dbPool = mysql.createPool({
  host: 'localhost',    
  user: 'root',    
  password: 'xxxx',
  database: 'carApp' 
});

module.exports = dbPool.promise();