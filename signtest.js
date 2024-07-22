$(document).ready(function() {
    var form = $("#signupForm");
    var nameInput = $("#name");
    var emailInput = $("#email");
    var passwordInput = $("#password");
    var btn = $("#signup-btn");
    var message = $("#message");

    var accounts = JSON.parse(localStorage.getItem("accounts")) || [];

    form.submit(function(e) {
      e.preventDefault();
    });

    btn.click(function() {
      var nameValue = nameInput.val().trim();
      var emailValue = emailInput.val().trim();
      var passwordValue = passwordInput.val().trim();

      if (nameValue !== "" && emailValue !== "" && passwordValue !== "") {
        var isValid = true;

        // Validation regex patterns
        var regex = {
          name: /[^@\.\-0-9][a-zA-Z]{3,8}$/,
          email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          password: /[a-zA-Z0-9@]{6}/
        };

        // Check each input validity
        if (!regex.name.test(nameValue)) {
          nameInput.addClass("is-invalid").removeClass("is-valid");
          isValid = false;
        } else {
          nameInput.addClass("is-valid").removeClass("is-invalid");
        }

        if (!regex.email.test(emailValue)) {
          emailInput.addClass("is-invalid").removeClass("is-valid");
          isValid = false;
        } else {
          emailInput.addClass("is-valid").removeClass("is-invalid");
        }

        if (!regex.password.test(passwordValue)) {
          passwordInput.addClass("is-invalid").removeClass("is-valid");
          isValid = false;
        } else {
          passwordInput.addClass("is-valid").removeClass("is-invalid");
        }

        if (isValid) {
          var exists = accounts.some(function(account) {
            return account.email === emailValue;
          });

          if (exists) {
            message.html("Email already exists.").removeClass("text-success").addClass("text-danger").show();
          } else {
            accounts.push({
              name: nameValue,
              email: emailValue,
              password: passwordValue
            });

            localStorage.setItem("accounts", JSON.stringify(accounts));

            message.html("Success.").removeClass("text-danger").addClass("text-success").show();
            form[0].reset();
          }
        } else {
          message.html("Please try again. Check name (min 3 characters) and password (min 6 characters).").removeClass("text-success").addClass("text-danger").show();
        }
      } else {
        message.html("All inputs are required.").removeClass("text-success").addClass("text-danger").show();
      }
    });
  });