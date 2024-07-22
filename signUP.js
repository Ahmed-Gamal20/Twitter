// var form = document.querySelector("form"); 
// var nameInput = document.querySelector("#name");
// var email = document.querySelector("#email");
// var password = document.querySelector("#password");
// var btn = document.querySelector("button"); 
// var message =document.querySelector("#message"); 
// var allInputs = document.querySelectorAll("input"); 



// var accounts; 
// if(localStorage.getItem("accounts")==null){
//     accounts =[]; 
// }
// else{
  
//    accounts =  JSON.parse(localStorage.getItem("accounts"));
    
// }


// form.addEventListener("submit" , function(e){
//     e.preventDefault(); 

// })

// function addAccount(){
//     accounts.push({
//         name:nameInput.value , 
//         password : password.value , 
//         email:email.value
//     });
//     localStorage.setItem("accounts" , JSON.stringify(accounts));

// }




// btn.addEventListener("click" , function(){
//    if(email.value != "" && nameInput.value!="" && password!=""){
//     if(nameInput.classList.contains("is-valid") && email.classList.contains("is-valid") && password.classList.contains("is-valid") &&localStorage.getItem("accounts")==null){
//        addAccount(); 

//         // console.log(email.value , nameInput.value , password.value);

//         message.classList.replace("d-none" , "d-block");
//         message.innerHTML = "success";
//         message.classList.remove("text-danger");
//         message.classList.add("text-success");
        
     
      

//     }


//     else if (nameInput.classList.contains("is-valid") && email.classList.contains("is-valid") && password.classList.contains("is-valid") && localStorage.getItem("accounts")!=null){
//     var existanceOfAccount ="";
//         for(var i =0 ; i<accounts.length ; i++){
//             if(accounts[i].email == email.value ){
//                existanceOfAccount=true ; 
//         break;
//             }
//         }
//         if(existanceOfAccount){
//             message.classList.replace("d-none" , "d-block");
//             message.innerHTML = "Email already exist";
//             message.classList.add("text-danger");
//             message.classList.remove("text-success");
//         }
//         else{
//            addAccount();
//             message.classList.replace("d-none" , "d-block");
//             message.innerHTML = "success";
//             message.classList.remove("text-danger");
//             message.classList.add("text-success");
//         }
//     }
//     else if (!nameInput.classList.contains("is-invalid") || !email.classList.contains("is-invalid") || !password.classList.contains("is-invalid")){
    
//         message.classList.replace("d-none" , "d-block");
//         message.innerHTML = "Please try again check name min 3 characters and password min 6 characters ";
//         message.classList.add("text-danger");
//         message.classList.remove("text-success");
    
    
    
    
//     }
            
   
// }


//     else{

// message.classList.replace("d-none" , "d-block");
// message.innerHTML = "All inputs is required";

//     }
// })



// for (var i =0 ; i < allInputs.length ; i++){
// //    IIFE => immediately invoked function expression 
// // will help to catch the current i beacause the var key word we can solve the problem 
// // with 2 ways 1- change var to let or add iife


//     (function(i){
//         allInputs[i].addEventListener("input" , function(){ 
//             var regex = {
//                 name:/[^@\.\-0-9][a-zA-Z]{3,8}$/,
//                 email:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 
//                 password :/[a-zA-Z0-9@]{6}/
//             }
            
//     if(regex[allInputs[i].id].test(allInputs[i].value)){
//         allInputs[i].classList.add("is-valid");
//         allInputs[i].classList.remove("is-invalid");
// console.log("valid")
//     }
//     else{
//         console.log("Ni")
//         allInputs[i].classList.add("is-invalid");
//         allInputs[i].classList.remove("is-valid");
//     }
    
//     })
//    })(i);
// }


// $(document).ready(function() {
//     var form = $("form");
//     var nameInput = $("#name");
//     var email = $("#email");
//     var password = $("#password");
//     var btn = $("button");
//     var message = $("#message");
//     var allInputs = $("input");
//     var accounts;

//     if (localStorage.getItem("accounts") === null) {
//         accounts = [];
//     } else {
//         accounts = JSON.parse(localStorage.getItem("accounts"));
//     }

//     form.on("submit", function(e) {
//         e.preventDefault();
//     });

//     function addAccount() {
//         accounts.push({
//             name: nameInput.val(),
//             password: password.val(),
//             email: email.val()
//         });
//         localStorage.setItem("accounts", JSON.stringify(accounts));
//     }

//     btn.on("click", function() {
//         if (email.val() !== "" && nameInput.val() !== "" && password.val() !== "") {
//             if (nameInput.hasClass("is-valid") && email.hasClass("is-valid") && password.hasClass("is-valid") && localStorage.getItem("accounts") === null) {
//                 addAccount();

//                 message.removeClass("d-none").addClass("d-block").html("success").removeClass("text-danger").addClass("text-success");
//             } else if (nameInput.hasClass("is-valid") && email.hasClass("is-valid") && password.hasClass("is-valid") && localStorage.getItem("accounts") !== null) {
//                 var accountExists = false;
//                 for (var i = 0; i < accounts.length; i++) {
//                     if (accounts[i].email === email.val()) {
//                         accountExists = true;
//                         break;
//                     }
//                 }
//                 if (accountExists) {
//                     message.removeClass("d-none").addClass("d-block").html("Email already exists").addClass("text-danger").removeClass("text-success");
//                 } else {
//                     addAccount();
//                     message.removeClass("d-none").addClass("d-block").html("success").removeClass("text-danger").addClass("text-success");
//                 }
//             } else {
//                 message.removeClass("d-none").addClass("d-block").html("Please try again check name min 3 characters and password min 6 characters ").addClass("text-danger").removeClass("text-success");
//             }
//         } else {
//             message.removeClass("d-none").addClass("d-block").html("All inputs are required");
//         }
//     });

//     allInputs.each(function() {
//         var input = $(this);
//         input.on("input", function() {
//             var regex = {
//                 name: /[^@\.\-0-9][a-zA-Z]{3,8}$/,
//                 email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
//                 password: /[a-zA-Z0-9@]{6}/
//             };

//             if (regex[input.attr("id")].test(input.val())) {
//                 input.removeClass("is-invalid").addClass("is-valid");
//             } else {
//                 input.removeClass("is-valid").addClass("is-invalid");
//             }
//         });
//     });
// });

