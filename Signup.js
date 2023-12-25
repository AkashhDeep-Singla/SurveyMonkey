function valid()
{
    var email, pass, name, name2, pass2, day, month, year;
    email=document.getElementById("email");
    pass=document.getElementById("pass");
    name=document.getElementById("name");
    name2=document.getElementById("name2");
    pass2=document.getElementById("pass2");
    day=document.getElementById("day");
    month=document.getElementById("month");
    year=document.getElementById("year");

    if(name.value =="")
    {
        document.getElementById("name_err").innerHTML="please Enter name!"
        return false;
    }
    if(name2.value =="")
    {
        document.getElementById("name2_err").innerHTML="please Enter name!"
        return false;
    }
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
    if(pass.value!=pass2.value)
    {
        // alert("Password doesn't match")
        // document.getElementById("pass2_err").innerHTML="password doesn't match";
        // return false;
    }
    if(day.value=="Select Day")
    {
        document.getElementById("day_err").innerHTML="Please Select Day"
        return false;
    }
    if(month.value=="Select Month")
    {
        document.getElementById("month_err").innerHTML="Please Select month"
        return false;
    }
    if(year.value=="Select Year")
    {
        document.getElementById("year_err").innerHTML="Please Select year"
        return false;
    }
    else
    {
       // Initialize Firebase
    
       var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("pass");
var signupForm = document.getElementById("signup_form");
var message = document.getElementById("message");

// Add signup event
signupForm.addEventListener("submit", function(event) {
event.preventDefault(); // Prevent form submission

var email = emailInput.value;
var password = passwordInput.value;

// Sign up with Firebase
firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(function() {
    // Signup successful
    message.textContent = "Signup successful!";
    message.style.color = "green";
  })
  .catch(function(error) {
    // Signup failed
  });
});  
    }
}
