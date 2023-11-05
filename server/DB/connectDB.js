import mongoose from "mongoose";
  
const connectDB = () => {
  mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((data) => {
    console.log(`Mongodb connected with server: ${data.connection.name}`);
  })
};

module.exports = connectDB;