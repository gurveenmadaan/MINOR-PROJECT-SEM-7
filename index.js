// requiring the express lib
const express = require('express');
const app = express(); //server set up and routing 
const port = 8000;

app.use(express.urlencoded());

<<<<<<< HEAD
//static link 
app.use(express.static('./assets'));
=======
app.use(express.static('./assets')); //define static files 
>>>>>>> d8c62b5daab68367c5025d5e431871bbe277b5c4

// set up the view engine
app.set('view engine', 'ejs'); //easy rendering 
app.set('views', './views');

<<<<<<< HEAD
//routing 
app.use('/', require('./routes'));
=======
app.use('/', require('./routes')); //links generated based on value
>>>>>>> d8c62b5daab68367c5025d5e431871bbe277b5c4


app.listen(port, function(err){ //code functional or not
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});