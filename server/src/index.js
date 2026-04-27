const express = require("express")
const app = express()

const userRoutes = require("./routes/userRoutes");

app.use(express.json())

app.use("/api/tasks", userRoutes);


app.get("/",(req,res)=>{
    res.send("wow")
});


app.listen(5000,()=>{
    console.log("backend running")
});