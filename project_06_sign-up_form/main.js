console.log("sign up form");

let formObject = {
  first:"",
  last:"",
  email:"",
  phone:"",
  password:"",
  confirm_password:""
}

const handleFormSubmit = (e) => {
  formObject.first = document.getElementById("first").value;
  formObject.last = document.getElementById("last").value;
  formObject.email = document.getElementById("email").value;
  formObject.phone = document.getElementById("phone").value;
  formObject.password = document.getElementById("password").value;
  formObject.confirm_password = document.getElementById("confirm-password").value;

  alert("information entered :: " + JSON.stringify(formObject));

  e.preventDefault();
}

const form = document.getElementsByTagName("form");

const submitButton = document.getElementById("form-submit");

submitButton.addEventListener("click",handleFormSubmit);