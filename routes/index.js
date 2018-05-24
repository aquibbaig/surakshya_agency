var express = require('express');
var router = express.Router();
const sgMail = require('@sendgrid/mail');
var dotenv = require('dotenv');
dotenv.config();

router.get('/',function(req,res,next){
  res.redirect('/home');
});

router.get('/home', function(req, res, next) {
 	res.render('index',{msg1:'class="active"',msg2:'',msg3:'',msg4:'',msg5:'',msg6:''});
});

router.get('/history',function(req,res,next){
	res.render('history',{msg1:'',msg2:'class="active"',msg3:'',msg4:'',msg5:'',msg6:''});
});
router.get('/services',function(req,res,next){
  res.render('services',{msg1:'',msg2:'',msg3:'class="active"',msg4:'',msg5:'',msg6:''});
});
router.get('/objectives', function(req, res, next) {
 	res.render('objectives',{msg1:'',msg2:'',msg3:'',msg4:'class="active"',msg5:'',msg6:''});
});
router.get('/gallery',function(req,res,next){
	res.render('gallery',{msg1:'',msg2:'',msg3:'',msg4:'',msg5:'class="active"',msg6:''});
});
router.get('/contact', function(req, res, next) {
    res.render('contact',{msg:"",msg1:'',msg2:'',msg3:'',msg4:'',msg5:'',msg6:'class="active"'});
});

router.post('/contact',function(req,res,next){
    sgMail.setApiKey(process.env.API_KEY);
    const msg = {
        to: "surakshya.agency@gmail.com",
        from: req.body.email,
        subject:"("+req.body.fname+" "+req.body.lname+")"+req.body.subject,
        text: req.body.body,
    };
    sgMail.send(msg);
    const msg2 = {
        to: req.body.email,
        from: "surakshya.agency@gmail.com",
        subject: req.body.subject,
        text:"Hello,"+req.body.fname+" "+req.body.lname+".Thank you for choosing us.",
    };
    sgMail.send(msg2);
    res.render("contact",{msg:"Your message has been sent.",msg1:'',msg2:'',msg3:'',msg4:'',msg5:'',msg6:'class="active"'});
    });

module.exports = router;
