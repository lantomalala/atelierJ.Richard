const express = require('express');
const app = express();
require('dotenv').config()
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const url = process.env.DB_URL

app.use(bodyParser.json());
//connect DB
mongoose.connect(url);

// page d'accuel
app.get('/', (req, res) => {
    res.send("hello word");
});
app.listen(3040);

//router import
const postsRoute = require('./rooter/posts'); 
const adminRoute = require('./rooter/admin');
const clientRoute = require('./rooter/client');
const articleRoute = require('./rooter/article');
const panierPersonaliseRoute = require('./rooter/panierPersonalise');
const panierRoute = require('./rooter/panier');
app.use('/posts', postsRoute);
app.use('/admin', adminRoute);
app.use('/client', clientRoute);
app.use('/Article', articleRoute);
app.use('/panierPersonalise', panierPersonaliseRoute);
app.use('/panier', panierRoute);
