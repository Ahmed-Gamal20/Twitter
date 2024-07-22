// $(document).ready(function() {
//     // Load existing data from localStorage
//     var existingData = JSON.parse(localStorage.getItem('twitterUserData')) || [];

//     // Display existing data
//     displaySavedData(existingData);

//     $('#signupForm').submit(function(e) {
//       e.preventDefault();
//       var username = $('#username').val().trim();
//       var email = $('#email').val().trim();
//       var password = $('#password').val().trim();

//       // Regular expressions for validation
//       var usernameRegex = /^[a-zA-Z0-9_]{3,}$/; // Alphanumeric and underscore, at least 3 characters
//       var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Basic email validation
//       var passwordRegex = /^.{6,}$/; // Minimum 6 characters

//       // Validate inputs
//       if (!usernameRegex.test(username)) {
//         $('#message').html('<div class="alert alert-danger" role="alert">يرجى إدخال اسم مستخدم صالح (أحرف وأرقام فقط).</div>');
//         return;
//       }

//       if (!emailRegex.test(email)) {
//         $('#message').html('<div class="alert alert-danger" role="alert">يرجى إدخال بريد إلكتروني صالح.</div>');
//         return;
//       }

//       if (!passwordRegex.test(password)) {
//         $('#message').html('<div class="alert alert-danger" role="alert">يرجى إدخال كلمة مرور صالحة (على الأقل 6 أحرف).</div>');
//         return;
//       }

//       // Add new data to existing data array
//       var newData = {
//         username: username,
//         email: email,
//         password: password
//       };
//       existingData.push(newData);

//       // Save updated data to localStorage
//       localStorage.setItem('twitterUserData', JSON.stringify(existingData));

//       // Clear form fields
//       // $('#username').val('');
//       // $('#email').val('');
//       // $('#password').val('');
      
//       // Display success message
//       $('#message').html('<div class="alert alert-success" role="alert">تم إنشاء الحساب بنجاح!</div>');

//       // Update displayed saved data
//       displaySavedData(existingData);
//     });

//     // Function to display saved data
//     function displaySavedData(data) {
//       $('#savedData').empty();
//       data.forEach(function(item) {
//         var listItem = '<li>اسم المستخدم: ' + item.username + ' - البريد الإلكتروني: ' + item.email + '</li>';
//         $('#savedData').append(listItem);
//       });
//     }
//   });











// login jquery





$(document).ready(function() {
    var emailInput = $("#email");
    var passwordInput = $("#password");
    var btn = $("#login-btn");
    var form = $("#loginForm");
    var message = $("#message");

    form.submit(function(event) {
      event.preventDefault();
    });

    btn.click(function() {
      var emailValue = emailInput.val().trim();
      var passwordValue = passwordInput.val().trim();

      if (emailValue !== "" && passwordValue !== "") {
        var accountsExist = JSON.parse(localStorage.getItem("accounts")) || [];

        if (accountsExist.length === 0) {
          message.html("You are a new user. Please sign up.");
        } else {
          var loggedIn = false;
          $.each(accountsExist, function(index, account) {
            if (account.email === emailValue && account.password === passwordValue) {
              localStorage.setItem("User", JSON.stringify(account));
              loggedIn = true;
              window.location.href = "../homePage.html";
              return false; // break the loop
            }
          });

          if (!loggedIn) {
            message.html("Incorrect email or password.");
          }
        }
      } else {
        message.html("All inputs are required.");
      }
    });
  });








  
//   sign up jquery

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