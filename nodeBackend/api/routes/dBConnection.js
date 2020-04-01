var mysql      = require('mysql');
var pool =  mysql.createPool({
	host:'127.0.0.1',
    port: '3306',
  user     : 'root',
  password : 'root',
  database : 'quiz'
  });

  var getConnection = function (cb) {
    pool.getConnection(function (err, connection) {
        //pass the error to the cb instead of throwing it
        if(err) {
          return cb(err);
        }
        cb(null, connection);
    });
};
module.exports = getConnection;