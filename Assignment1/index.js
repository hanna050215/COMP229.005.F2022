function checkvalid(){
    var name1 = document.getElementById("name1");
    var name2 = document.getElementById("name2");
    var name3 = document.getElementById("name3");
    var email = document.getElementById("email");
    var number = document.getElementById("number");

    if(!name1.checkValidity()){
        name1.setCustomValidity("Please enter your first name.");
        name1.reportValidity();
    }
    else if(!name3.checkValidity()){
        name3.setCustomValidity("Please enter your last name.");
        name3.reportValidity();
    }
    else if(!email.checkValidity()){
        email.setCustomValidity("Please enter your email.");
        email.reportValidity();
    }
    else{
        alert("Successfully submitted!");
        window.location ="http://hoeng12.byethost7.com/Assignment1/index.html";
    }
}
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render(
    'index', 
    { 
      title: 'Home', 
      name: 'Farzana' 
    }
  );
});

router.get('/project', function(req, res, next) {
  res.render(
    'projectservices', 
    { 
      title: 'Project',
    }
  );
});

router.get('/service', function(req, res, next) {
  res.render(
    'projectservices', 
    { 
      title: 'Service',
    }
  );
});



router.get('/contact', function(req, res, next) {
  res.render(
    'index', 
    { 
      title: 'Contact Me',
      name: 'Farzana' 
    }
  );
});

module.exports = router;