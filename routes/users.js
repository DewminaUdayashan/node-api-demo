import express from "express";
import { createUser,getUsers,getUserById,updateUser } from "../controllers/users.js";

const router = express.Router();


router.get('/',getUsers);


router.post('/',createUser);


router.get('/:id',getUserById);


router.patch('/:id',updateUser);

export default router;