import express from "express";
import { addPost } from "../controllers/post.js";

const router = express.Router();

//I don't want to write all the resp here, so I will use controllers
// router.get("/test", (req,res) => {
//     res.json("This is posts page")
// })

router.get("/test", addPost)

export default router;