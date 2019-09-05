function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var title = document.getElementById("title").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  var text;

  error_message.style.padding = "10px";

  if (name.length < 4) {
    text = "Please input a valid Name.";
    error_message.innerHTML = text;
    return false;
  }

  if (email.indexOf("@") == 1 || email.length < 6) {
    text = "Please input a valid email address.";
    error_message.innerHTML = text;
    return false;
  }

  if (title == "") {
    text = "Please enter the title of your message.";
    error_message.innerHTML = text;
    return false;
  }

  if (message == "") {
    text = "Input your message.";
    error_message.innerHTML = text;
    return false;
  }

  alert("Message sent successfully!!");
  return false;

}