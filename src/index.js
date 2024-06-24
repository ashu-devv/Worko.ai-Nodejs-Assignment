const express = require('express');
const {serverConfig,Logger,connectDB} = require('./config');
const userRoutes = require('./routes/user-routes');



const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/worko/user',userRoutes);
connectDB();


app.listen(serverConfig.PORT,()=>{
    console.log(`Successfully started the server at port ${serverConfig.PORT}`);
    Logger.info('Successfully Started The Server','root',{});
}) 

module.exports = app;