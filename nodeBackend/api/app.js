module.exports = function (app) {
    //Initialize models
   // let eventsModel = require('./models/eventList');
    let userModel = require('./Models/Users');
  
    //Initialize routes
   /* let eventsRoutes = require('./routes/events-route');
    eventsRoutes(app);*/
    let userRoutes = require('./routes/userRoute');
    userRoutes(app);
   /* let emailRoutes = require('./routes/email-route');
    emailRoutes(app);*/
};