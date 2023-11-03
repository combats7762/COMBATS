function validateEmail(){ 
    var email = document.getElementById('email').value;
    var a = /^[a-zA-Z0-9]+@explorin.io$/;
    
    if (a.test(email)) {
    console.log("valid");
    } else {
       alert("invalid");
    }
}