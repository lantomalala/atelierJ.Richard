const mongoose = require('mongoose');

const PanierPersonaliseSchema = mongoose.Schema({
    idArticlePerso:{
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId,
        required: true
    },
    DescriptionArticlePerso:{ 
        type: String,
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
        data: Buffer ,
        ContentType: String
    },
    date: { 
        type: Date,
        default: Date.now
    }
});   

module.exports = mongoose.model('PanierPersonalise', PanierPersonaliseSchema)
