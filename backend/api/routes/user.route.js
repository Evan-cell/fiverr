import express from 'express';

const router = express.Router();

router.get('/tests',(req,res)=>{
    res.send("it works!")
})

export default router;