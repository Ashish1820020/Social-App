const connectDb = require("./config/db");
const app = require("./index");

app.listen(process.env.PORT, () => {
    console.log("listening in port no", process.env.PORT);
});

connectDb();