let cart = document.getElementById("cart-item");
if(!localStorage.getItem("added_title")){
  cart.style.fontSize = '25px';
  cart.style.textAlign =  'center';
  cart.innerHTML = `<p>No Items To Show!</p>`
}
else{
  cart.innerHTML = `${localStorage.getItem("added_title")}`
}
