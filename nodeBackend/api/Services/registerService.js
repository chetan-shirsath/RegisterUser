const users = require('../Models/Users');
const getConnection = require('../routes/dBConnection');

exports.register = function(req,res){
    let user = new users();
    user = req.body;
    getConnection(function (err, connection) {
    connection.query('INSERT INTO users SET ?',user, function (error, results) {
    if (error) {
      console.log(error);
      
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    }else{
      res.send({
        "code":200,
        "success":"user registered sucessfully"
          });
    }
    });
    connection.release();
});

  }