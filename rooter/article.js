const express = require('express');
const router = express.Router();
const Post = require('../models/Article');

//Show all post
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err })
    }

});
//post some things
//Photo mbola tsy mety
router.post('/', async (req, res) => {
    const post = new Post({
        //idArticle:req.body.idArticle,
        NomArticle: req.body.NomArticle,
        DescriptionArticle: req.body.DescriptionArticle,
        Prix: req.body.Prix,
        Longueur: req.body.Longueur,
        Largeur: req.body.Largeur,
        TipeMeteau: req.body.TipeMeteau,
        //Photo:req.file.buffer
    });
    try {
        const savedPost = await post.save()
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });

    }
})
//Show Article 
router.get('/:idArticle', async (req, res) => {
    try {
        const post = await Post.findOne(req.params);
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
})
// Delete Article
router.delete('/:idArticle', async (req, res) => {
    try {
        const removePost = await Post.findOneAndDelete(req.params);
        res.json(removePost);
    } catch (err) {
        res.json({ message: err });
    }
})
// Update Post
router.patch('/:idArticle', async (req, res) => {
    try {
        const updatePost = await Post.findOneAndUpdate(
            { $set: req.params },
            {
                $set: {
                    NomArticle: req.body.NomArticle,
                    DescriptionArticle: req.body.DescriptionArticle,
                    Prix: req.body.Prix,
                    Longueur: req.body.Longueur,
                    Largeur: req.body.Largeur,
                    TipeMeteau: req.body.TipeMeteau,
                    Photo: {
                        contentType: req.body.Photo
                    }
                }
            }
        );
        res.json(updatePost);

    } catch (err) {
        res.json({ message: err });
    }
})
module.exports = router;