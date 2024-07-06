const express = require('express');
const router = express.Router();
const Post = require('../models/Admin'); 

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
        idAdmin:req.body.idAdmin,
        NomAdmin:req.body.NomAdmin,
        PrenomAdmin:req.body.PrenomAdmin,
        MotsDePassAdmin:req.body.MotsDePassAdmin,
        idPanier:req.body.idPanier,
        idPanierPerso:req.body.idPanierPerso        
    });
    try{
        const savedPost = await post.save()
        res.json(savedPost); 
    }catch(err){
        res.json({message: err});
          
    }
})

module.exports = router;