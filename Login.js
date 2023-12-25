function valid()
{
    event.preventDefault();
    var email,pass;

    email=document.getElementById("email");
    pass=document.getElementById("pass");


    if(email.value =="")
    {
        document.getElementById("email_err").innerHTML="please Enter email!"
        return false;
    }
    if(pass.value =="")
    {
        document.getElementById("pass_err").innerHTML="please Enter password!"
        return false;
    }
    if(pass.value.length<6)
    {
        alert("Please Enter passsword atleast 6 characters");
        return false;
    }
    else
    {
        var emailInput = document.getElementById("email");
        var passwordInput = document.getElementById("pass");
        // var message = document.getElementById("message");
    
        var email = emailInput.value;
        var password = passwordInput.value;
    
        // Sign in with Firebase
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then(function() {
            window.location.href = "form.html";
            // Login successful
            message.textContent = "Login successful!";
            message.style.color = "green";
          })
          .catch(function(error) {
            console.log(error);
            // Login failed
            message.textContent = error.message;
            message.style.color = "red";
          });
    }
   
}