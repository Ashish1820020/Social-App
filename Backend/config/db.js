const mongoose = require("mongoose")


const connectDb = () => {
    mongoose.connect(process.env.MONGO_URL)
    .then((con) => console.log("MongoDB is connected", con.connection.host))
    .catch((err) => console.log("some error occurred", err));
}

module.exports = connectDb;