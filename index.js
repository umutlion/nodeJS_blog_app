const   mongoose    = require('mongoose'),
        express     = require('express'),
        app         = express();

// routes
const indexRoutes = require('./routes/indexRoutes')

// app config
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Routes using
app.use(indexRoutes);

const server = app.listen(3000, (err)=> {
    if(err)
        console.log(err);
    console.log('App started, listening on port  : %d', server.address().port);
})