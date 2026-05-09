const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

const dbConnection = require('./config/database');
const categoryRoute = require('./routes/categoryRoute');
const ApiError = require('./utils/apiError');
const globalError = require('./middlewares/errormiddleware');


dotenv.config({ path: "config.env" });
dbConnection();



// express app
const app = express();

// middleware for logging
app.use(express.json()); //parcing the json file 
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
    console.log(`mode: ${process.env.NODE_ENV}`);
}
// Mount routes
app.use('/api/v1/categories', categoryRoute);


app.all('*splat',(req,res,next)=>{
    next(new ApiError(`can't find this route : ${req.originalUrl}`, 400))
});

// Global error handling middleware
app.use(globalError);

const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
    console.log(`App Running on Port ${PORT}`);
})


process.on('unhandledRejection' ,(err) => {
    console.log(`Unhandled Rejection Error : ${err.name} | ${err.message}`);
    server.close(() => {
        console.log(`server closed due to unhandled rejection`);
        process.exit(1);
    })
})