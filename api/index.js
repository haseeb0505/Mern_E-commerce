const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const UserRoute = require('./routes/user');

dotenv.config();

mongoose.connect(process.env.MONGO_URL, () => {
    console.log('connected to mongoDB');
}).catch(err => {
    console.log(err);
});

app.use(express.json());
app.use('/api/users', UserRoute);


app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running on port 5000');
})