import express from "express";
import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/controller.js';

const router = express.Router();
router.get('/test',(req,res)=>{
res.send("hello word")

})
router.get('/', getPosts);
router.post('/', createPost);
// router.get('/:id', getPost);
router.patch('/:id', updatePost);
// router.delete('/:id', deletePost);
// router.patch('/:id/likePost', likePost);

export default router;