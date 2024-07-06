const express = require('express');
const router = express.Router();
const Post = require('../models/Client'); 

//Show all post
router.get('/', async (req, res)=>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err})
    }
    
});

//post some things
router.post('/', async (req, res)=>{
    const post = new Post({
        idClient:req.body.idClient,
        NomClient:req.body.NomClient,
        PrenomClient:req.body.PrenomClient,
        MailClient:req.body.MailClient,
        NumeroClient:req.body.NumeroClient        
    });
    try{
        const savedPost = await post.save()
        res.json(savedPost); 
    }catch(err){
        res.json({message: err});
          
    }
})

module.exports = router;