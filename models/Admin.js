const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
    idAdmin:{
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId,
        required: true
    },
    NomAdmin:{ 
        type: String,
        required: true
    },
    PrenomAdmin:{ 
        type: String,
        required: true
    },
    MotsDePassAdmin:{ 
        type: String,
        required: true
    },
    idPanier:{ 
        type: String,
        required: true
    },
    idPanierPerso:{
        type: String,
        required: true
    }
});   

module.exports = mongoose.model('Admin', AdminSchema)
