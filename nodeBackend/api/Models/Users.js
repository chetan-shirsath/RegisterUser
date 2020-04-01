const SchemaObject = require('schema-object');
 const bcrypt = require('bcryptjs');
  var user = new SchemaObject({
    firstName: {
        type: String,
        required: 'Fist name can\'t be empty'
    },
    lastLame: {
        type: String,
        required: 'Last name can\'t be empty'
    },
    email: {
        type: String,
        required: 'email can\'t be empty',
        unique:true
    },
    password:{
        type:String,
        required: 'Password can\'t be empty',
        bcrypt: true
    }
});

module.exports = user;
