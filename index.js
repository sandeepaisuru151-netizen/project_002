import express from "express";

import mongoose from "mongoose";
import Student from "./models/students.js";
import studentRouter from "./routers/studentRouter.js";
import userRouter from "./routers/userRouter.js";
import jwt from "jsonwebtoken";
import authenticationUser from "./middlewares/authentications.js";
import productRouter from "./routers/productRouter.js";


const app = express();

const mongodburl = "mongodb+srv://admin_isuru:10270@cluster002.8rnqv4e.mongodb.net/?appName=Cluster002";



mongoose.connect(mongodburl).then(
    () => {
        console.log("connected to mongodb");
    }
)


app.use(express.json());

app.use(authenticationUser) 


app.use("/students", studentRouter);

app.use("/user", userRouter);

app.use("/product",productRouter);


app.listen(3000, () => {
    console.log("Server is running on port 3000...!")
});


