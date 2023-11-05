import connectDB from './DB/connectDB'
import app from './index.js'


const server = app.listen(process.env.PORT, ()=>{
    console.log("Listening to port no ", process.env.PORT);
})

console.log(`Mongodb connected with server`);
server();
connectDB();