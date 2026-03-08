import express from "express";
import { getStudent } from "../controllers/studentController.js";
import { createStudent } from "../controllers/studentController.js";
import { putStudent } from "../controllers/studentController.js";

const studentRouter = express.Router();

studentRouter.get("/",getStudent)


studentRouter.post("/", createStudent)

studentRouter.delete("/", (req, res) => {
    console.log(req)
    console.log("The delete request is recived...")
})

studentRouter.put("/",putStudent)


export default studentRouter;