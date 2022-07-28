var express = require('express');
var router = express.Router();
var formidable = require('formidable');
import { initializeApp } from "firebase/app";

const firebaseConfig = {

  apiKey: "AIzaSyAvSwnRCdQEnZRGTogdFTCNgDgMLMAh3-I",

  authDomain: "clone-24f1e.firebaseapp.com",

  databaseURL: "https://clone-24f1e-default-rtdb.firebaseio.com",

  projectId: "clone-24f1e",

  storageBucket: "clone-24f1e.appspot.com",

  messagingSenderId: "27245114588",

  appId: "1:27245114588:web:397628d2ebd50665b03019"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/uploads', (req, res)=>{

  let form = new formidable.IncomingForm({

    uploadDir: './uploads',
    keepExtensions: true
  });

  form.parse(req, (err, fields, files) =>{

    res.json({
      files
    });
  });
  
});

module.exports = router;
module.exports = app;
