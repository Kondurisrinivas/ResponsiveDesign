// script.js

document.getElementById("getCallButton").addEventListener("click", logFormData);

function logFormData() {
  var name = document.getElementById("fname").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("tel").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;

  console.log("Name: " + name);
  console.log("Email: " + email);
  console.log("Phone: " + phone);
  console.log("Date: " + date);
  console.log("Time: " + time);
}
