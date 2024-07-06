const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
    idClient:{
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId,
        required: true
    },
    NomClient:{ 
        type: String,
        required: true
    },
    PrenomClient:{ 
        type: String,
        required: true
    },
    MailClient:{ 
        type: String,
        required: true
    },
    NumeroClient:{ 
        type: String,
        required: true
    }
});   

module.exports = mongoose.model('Client', ClientSchema)
