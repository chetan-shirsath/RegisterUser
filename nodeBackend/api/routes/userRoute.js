module.exports = function (app) {
    const userController = require('../Controllers/RegisterController');
   /* const jwtHelper = require('../config/jwtHelper');
    require('../config/passportConfig');*/
    
    app.route('/api/register')
        .post(userController.register);
    /*app.route('/users/authenticate')
        .post(userController.authenticate);
    app.route('/userProfile')
        .get(jwtHelper.verifyJwtToken, userController.userProfile);*/
};