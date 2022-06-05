const email = document.querySelector(".email")
const btn = document.querySelector(".btn")
const error = document.querySelector(".error")
const message =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
function input(email){
if (email.value === ""){
   error.classList.add("show-error")
 email.style.borderColor= "red"
 }

    else if(email.value.match (message)) {
        email.style.borderColor= "green"
        error.classList.remove("show-error")
        alert("Submitted")
    }

}


btn.addEventListener("click", function(){
   
   return input(email)    
})