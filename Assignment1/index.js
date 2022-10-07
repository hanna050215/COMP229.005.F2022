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
        window.location ="https://goodmemory.tistory.com/45";
    }
}