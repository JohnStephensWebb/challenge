var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/', function(req, res, next) {
  res.sendStatus(200)
})


router.get('/:id', function(req, res, next) {
  res.status(200).send(req.params.id)
})


router.post('/', function(req, res, next) {
  res.status(200).send("success!")
})


router.patch('/:id', function(req, res, next) {
  let result = { id:req.params.id, name: req.body.name }
  res.status(200).send(result)
})


router.delete('/:id', function(req, res, next) {
  res.status(200).send(req.params.id)
})

module.exports = router;
