async function storeFormData()  {
    var emailInput = document.getElementById("email");
    var ageInput = document.getElementById("age");
    var nameInput = document.getElementById("name");
    // var message = document.getElementById("message");

    var email = emailInput.value;
    var age = ageInput.value;    
    var name = nameInput.value;    



  //  var user =  firebase.auth().currentUser;
   // var loginId = user.uid;
  //  console.log('Login ID:', loginId);
      // Get the login ID (you can replace this with your actual login ID retrieval logic)
// var loginId = 'USER_LOGIN_ID';
const db = firebase.firestore();
// Create a reference to the user document within the "users" collection
var userDocRef = db.collection('users').doc(email);


// Create an object with the form data
var formData = {
  email:email,
  name:name,
  age: age,
  // Add more form fields as needed
};

// Set the form data within the user document
userDocRef.set(formData)
  .then(function() {
      console.log('Form data saved successfully');
      message.textContent = "Form data saved successfully!";
      message.style.color = "green";
  })
  .catch(function(error) {
    console.error('Error saving form data: ', error);
  }); 
  }
