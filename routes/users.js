var express = require('express');
var router = express.Router();
var userModel=require("../model/user");
var checklogin=require("./checklogin");
//ע��
router.get('/register', function(req, res, next) {
  res.render("register");
});
//�û�ע������
router.post('/register',function(req, res, next) {
  var user = req.body;
  user.avatar = 'https://secure.gravatar.com/avatar/'+user.email;
  userModel.create(user,function(err,doc) {
    if (err) {
      console.log(err);
    } else {
      req.session.user = doc;
      res.send(true);
    }
  })
  //res.send("ok");
});

//��¼
router.get('/login', function(req, res, next) {
  res.render("login");
});

router.post('/login', function(req, res, next) {
  var user = req.body;
  userModel.findOne(user,function(err,user){
    if(err){
      console.log(err);
    }else{
      req.session.user = user;
      req.send(true);
    }
  });
});
module.exports = router;
