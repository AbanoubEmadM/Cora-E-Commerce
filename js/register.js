let fName = document.getElementById("fname");
let lName = document.getElementById("lname");
let email = document.getElementById("email");
let mobile = document.getElementById("mobile");
let birth = document.getElementById("birth");
let password = document.getElementById("password");
let cPassword = document.getElementById("cpassword");
let check = document.getElementById("check");

let agreeBtn = document.getElementById("agree");
let loginBtn = document.getElementById("login");


agreeBtn.onclick  = function(e){
    e.preventDefault()

    if(fName.value === "" || lName.value === "" || email.value === "" || mobile.value === "" || birth.value === "" || password.value === "" || cPassword.value === "" || check.checked === false){
        alert("Write Your Info");
        localStorage.removeItem("user_name");
    }
    else if(password.value !== cPassword.value){
        alert("'Password' doesnt match 'Confirm Password'")
    }
    else{
        window.location = 'home.html';
        localStorage.setItem("user_name",`${fName.value} ${lName.value}`)
    }
}

loginBtn.onclick = function(){
    window.location = 'login.html'
}