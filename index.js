import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./configs/connectdb.js"
import userRoute from "./routes/userRoute.js"
import authRoute from "./routes/authRoute.js"

const app = express()
dotenv.config();
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT;
connectDB();

app.use("/api/users/",userRoute)
app.use("/api/auth/",authRoute)


app.listen(PORT,()=>{
    console.log("Server started at port 8000!")
})
