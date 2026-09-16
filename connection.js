//Import mongoose
const mongoose = require('mongoose')

connectionString = process.env.DATABASE

mongoose.connect(connectionString).then(() => {
    console.log(`MongoDB connection sucessfull`);

}).catch((error) => {
    console.log(`mongoDB connection failed due to ${error}`);

})