const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema({
    idArticle:{
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId,
        required: true
    },
    NomArticle:{ 
        type: String,
        required: true
    },
    DescriptionArticle:{ 
        type: String,
        required: true
    },
    Prix:{ 
        type: Number,
        required: true
    },
    Longueur:{ 
        type: Number,
        required: true
    },
    Largeur:{
        type: Number,
        required: true
    },
    TipeMeteau:{
        type: String,
        required: true
    },
    Photo:{
         type: Buffer
    },
    date: { 
        type: Date,
        default: Date.now
    }
});   

module.exports = mongoose.model('Article', ArticleSchema)
