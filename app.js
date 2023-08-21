const express = require('express');

const routes = require('./routes/routes')

const app = express();

const PORT = 3000;


app.use(express.json());

app.use('/',routes);



app.listen(PORT,(error)=>{
    if(!error){
        console.log(`Server listening on port ${PORT}`)
    } else{
        console.log('Error: ', error);
    }
})