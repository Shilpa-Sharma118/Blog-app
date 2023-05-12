import express, { application } from "express";
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

//for testing purpose on how api call works
app.get("/test", (err,res) => {
    res.json("It works!!!")
})

//Now instead of writing routes in a common file here we are
//seperating the routes in the respective files under routes fodler

app.use("/api/posts", postRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)

app.listen(8800, ()=>{
    console.log("Connected to backend11!!")
})
