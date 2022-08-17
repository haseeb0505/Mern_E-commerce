const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const UserRoute = require('./routes/user');
const AuthRoute = require('./routes/auth');

dotenv.config();

mongoose.connect(process.env.MONGO_URL, () => {
    console.log('connected to mongoDB');
}).catch(err => {
    console.log(err);
});

app.use(express.json());
app.use('/api/auth', AuthRoute);
app.use('/api/users', UserRoute);


app.listen(process.env.PORT || 5000, () => {
    console.log('Server is running on port 5000');
})