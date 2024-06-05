import express from 'express' ;
import { blogPost } from '../controllers/blogController.js';
import {isAuthenticated, isAuthorized} from '../middlewares/auth.js'
const router = express.Router();


router.post('/post', isAuthenticated ,isAuthorized("Admin") ,blogPost) ;
router.delete("/delete/:id", isAuthenticated, isAuthorized("Admin"), deleteBlog );
router.get("/all", getAllBlogs);  
router.get("/singleblog/:id", isAuthenticated, getSingleBlog);
router.get("/myblogs", isAuthenticated, isAuthorized("Admin"), getMyBlogs);


export default router ;