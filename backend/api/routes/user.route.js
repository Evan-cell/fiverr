import express from 'express';
import {deleteUser} from '../controllers/user.controller.js';

const router = express.Router();

router.get('/tests',deleteUser)

export default router;