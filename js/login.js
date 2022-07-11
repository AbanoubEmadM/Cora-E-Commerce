let email = document.getElementById("email");
let password = document.getElementById("password");
let submitBtn = document.getElementById("submit-btn");

submitBtn.onclick = function(){
    if(email.value !== "" && password.value !== ""){
        window.location = 'index.html'
        localStorage.setItem("user_name",`${email.value} ${password.value}`)

    }else{
        swal("Sorry", "You Have To Write All Info", "error");
    }
}
