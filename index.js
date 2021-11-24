const   mongoose    = require('mongoose'),
        express     = require('express'),
        bodyParser  = require('body-parser'),
        app         = express();

// routes
const indexRoutes = require('./routes/indexRoutes'),
      adminRoutes = require('./routes/adminRoutes')

// app config
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Routes using
app.use(indexRoutes);
app.use(adminRoutes);


const server = app.listen(3000, (err)=> {
    if(err)
        console.log(err);
    console.log('App started, listening on port  : %d', server.address().port);
})