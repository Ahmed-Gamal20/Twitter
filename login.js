// var emailInput = document.getElementById("email");
// var passwordInput = document.getElementById("password");
// var btn = document.querySelector("#login-btn");
// var form = document.querySelector("form");
// var message = document.querySelector("#message");


// var accountsExsist ;

// form.addEventListener("submit" , function(event){
//     event.preventDefault() ; 

// })

// btn.addEventListener("click" ,function(){
// if(emailInput.value!="" && passwordInput.value!=""){
//     if(localStorage.getItem("accounts") == null){
//         accountsExsist =[] ; 
//         // message.style.display="block";
//     message.classList.replace("d-none" , "d-block");
//         message.innerHTML = "You are new User please sign up";

//     }
//     else{
//         accountsExsist=JSON.parse(localStorage.getItem("accounts"));
//         for(var i =0 ; i<accountsExsist.length ; i++){
//             if(accountsExsist[i].email == email.value && accountsExsist[i].password == passwordInput.value  ){
//                 // console.log(accountsExsist)
//                 localStorage.setItem("User" , JSON.stringify(accountsExsist[i]));
//                 window.location.href="/home.html"; 
//                 break;
//             }
//             else if(accountsExsist[i].email != email.value){

//                 message.innerHTML = "incorrect Email";
//                 emailInput.focus();
//                 emailInput.select();

//             }
//             else if(accountsExsist[i].password != passwordInput.value  ){
//                 message.innerHTML = "incorrect Password";
//                 passwordInput.focus();
//                 passwordInput.select();
//             }
//         }
//     }
// }
// else{
//     message.classList.replace("d-none" , "d-block");
//     message.innerHTML = "All inputs is required";}

// })


