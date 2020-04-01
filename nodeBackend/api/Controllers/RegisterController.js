const registerService = require('../Services/registerService');
exports.register = function (request, response) {
   registerService.register(request, response);
};