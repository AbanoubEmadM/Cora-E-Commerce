let navIcon = document.getElementById("navbar-icon");
let navbarDiv = document.getElementById("nav-items");

navIcon.onclick = function(){
    if(navbarDiv.style.display === 'none'){
        navbarDiv.style.display = 'block';
    }else{
        navbarDiv.style.display = 'none';
    }
}