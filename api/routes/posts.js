import express from "express";
import { addPost, deletePost, getPost, getPosts, updatePost } from "../controllers/post.js";

const router = express.Router();

//I don't want to write all the resp here, so I will use controllers
// router.get("/test", (req,res) => {
//     res.json("This is posts page")
// })

router.get("/test", addPost)

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", addPost);
router.delete("/:id", deletePost);
router.put("/:id", updatePost);

export default router;
