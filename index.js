// requiring the express lib
const express = require('express');
const app = express(); //server set up and routing 
const port = 8000;

app.use(express.urlencoded());

app.use(express.static('./assets')); //define static files 

// set up the view engine
app.set('view engine', 'ejs'); //easy rendering 
app.set('views', './views');

app.use('/', require('./routes')); //links generated based on value


app.listen(port, function(err){ //code functional or not
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});