//Import mongoose
const mongoose = require('mongoose')

const connectionString = process.env.DATABASE

mongoose.connect(connectionString).then(() => {
    console.log(`MongoDB connection sucessfull`);

}).catch((error) => {
    console.log(`mongoDB connection failed due to ${error}`);

})