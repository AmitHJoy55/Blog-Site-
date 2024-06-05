import express from 'express' ;
import { blogPost } from '../controllers/blogController.js';
import {isAuthenticated, isAuthorized} from '../middlewares/auth.js'
const router = express.Router();


router.post('/post', isAuthenticated ,isAuthorized("Admin") ,blogPost) ;


export default router ;