const express = require('express');
const router = express.Router();
const Post = require('../models/PanierPersonalise');

//Show all post
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json({ message: err })
    }

});
//post Panier Personalise
//Photo mbola tsy mety
router.post('/', async (req, res) => {
    const post = new Post({
        idArticlePerso: req.body.idArticlePerso,
        DescriptionArticlePerso: req.body.DescriptionArticlePerso,
        Longueur: req.body.Longueur,
        Largeur: req.body.Largeur,
        TipeMeteau: req.body.TipeMeteau,
        Photo: {
            contentType: req.body.Photo
        }
    });
    try {
        const savedPost = await post.save()
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err });

    }
})
//Update Article Personalise
router.patch('/:idArticlePerso', async (req, res) => {
    try {
        const updatePost = await Post.findOneAndUpdate(
            { $set: req.params },
            {
                $set: {
                    idArticlePerso: req.body.idArticlePerso,
                    DescriptionArticlePerso: req.body.DescriptionArticlePerso,
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