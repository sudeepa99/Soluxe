const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const mongoose = require('mongoose');
const dotenv =require('dotenv');
const router = require('./Router/router');
dotenv.config();
app.use(cors());
app.use(express.json());
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.Mongo_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB database is connected');
    } catch (err) {
        console.error('MongoDB database connection failed:', err); 
    }
};


app.listen(port, () => {
    connectDB();
    console.log("Server is running on port " + port);
});

app.use('/api',router);