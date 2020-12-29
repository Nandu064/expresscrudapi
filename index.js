const express = require('express');
const path = require('path');
const app = express();

const logger = require('./middleware/logger');
// app.use(logger);


const port =  5000;
// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html'));
// });
//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//Set static folder
app.use(express.static(path.join(__dirname,'public')));
//Routing api members
app.use('/api/members',require('./routes/api/members'));
app.listen(port,()=>{
    console.log(`Listening on ${port}`);
});