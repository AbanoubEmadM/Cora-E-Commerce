let cart = document.getElementById("cart-item");
// cart.innerHTML = `
//         ${localStorage.getItem("added_title")}
// `
// let buyBtn = document.querySelectorAll(".buy-btn")

// buyBtn.forEach((btn)=>{
//        btn.addEventListener("click",()=>{
//          window.location = '../html/payment.html'
//        })
// })

if(!localStorage.getItem("added_title")){
  cart.style.fontSize = '25px';
  cart.style.textAlign =  'center';
  cart.innerHTML = `<p>No Items To Show!</p>`
}
else{
  cart.innerHTML = `${localStorage.getItem("added_title")}`
}