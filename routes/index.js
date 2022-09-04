var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var fs = require('fs');



router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/file', (req, res, next)=>{

  let path = './uploads/' + req.query.path;

  console.log(req.body);

  if(fs.existsSync(path)){

    fs.readFile(path, (err, data)=>{

      if (err){

        console.log(err);
        res.status(400).json({

          error: err
        });

      }else{

        res.status(200).end(data);
      }
    })
  }else{

    res.status(404).json({
      error: 'File not found.'
    });
  }
});
  
router.delete('/file', (req, res) => {
  let form = new formidable.IncomingForm({
    uploadDir: './uploads',
    keepExtensions: true
  })

  form.parse(req, (err, fields, files) => {

    let path = './uploads/' + fields.path;

    if (fs.existsSync(path)) {
      fs.unlink(path, err => {
        if (err) {
          res.status(400).json({
            err
          })
        } else {
          res.json({
            fields
          });
        }
      });
    } else{

      res.status(404).json({

        error: 'File not Found.'
      })
    }
    
  })
})

router.post('/uploads', (req, res) => {

  let form = new formidable.IncomingForm({

    uploadDir: './uploads',
    keepExtensions: true
  });

  form.parse(req, (err, fields, files) => {

    res.json({
      files
    });
  });

});

module.exports = router;

