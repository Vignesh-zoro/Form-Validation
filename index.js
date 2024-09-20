$(document).ready(function () {
  $("#formName").validate({
    rules: {
      fname: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 8,
      },
      cpassword: {
        required: true,
        minlength: 8,
        equalTo: "#password",
      }
    },
    messages: {
      fname: {
        required: "Please enter a valid name"
      },
      email: {
        required: "Please enter a e-mail address"
      },
      password: {
        required: "Please enter a password"
      },
      cpassword: {
        required: "Please enter a confirm password",
        equalTo: "Password does not match",
      }
    }
  })











});