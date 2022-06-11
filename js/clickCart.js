let cartIconNav = document.getElementById("cart");
let viewAll = document.getElementById("view-all");

cartIconNav.onclick = function(e){
    console.log(localStorage.getItem("added_title"));
    window.location = '../html/cart.html'   
}
