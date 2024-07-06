const mongoose = require('mongoose');

const PanierSchema = mongoose.Schema({
    idPanier:{
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId,
        required: true
    },
    idClient:{ 
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"Client"
    },
    idArticle:{ 
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"Article"
    },
    date: { 
        type: Date,
        default: Date.now
    }
   
});   

module.exports = mongoose.model('Panier', PanierSchema)
