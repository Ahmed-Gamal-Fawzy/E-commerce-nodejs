const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const dbConnection = require('./config/database');
const categoryRoute = require('./routes/categoryRoute');

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

// Global error handling middleware
app.use((err,req,res,next) =>{
    res.status(400).json({err})
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`App Running on Port ${PORT}`);
})