const express = require('express');
const router = express.Router();
const Post = require('../models/Panier'); 

//Show all post
router.get('/', async (req, res)=>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message: err})
    }
    
});
//faire une Commande
router.post('/', async (req, res)=>{
    const post = new Post({
        idPanier:req.body.idPanier,
        idClient: req.body.idClient,
        idArticle: req.body.idArticle 
    });
    try{
        const savedPost = await post.save()
        res.json(savedPost); 
    }catch(err){
        res.json({message: err});
          
    }
})
//delete panier
router.delete('/:idPanier', async (req, res) => {
    try {
        const removePost = await Post.findOneAndDelete(req.params);
        res.json(removePost);
    } catch (err) {
        res.json({ message: err });
    }
})

module.exports = router;