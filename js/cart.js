let cart = document.getElementById("cart-item");
cart.innerHTML = `
        ${localStorage.getItem("added_title")}
`
let buyBtn = document.querySelectorAll(".buy-btn")

buyBtn.forEach((btn)=>{
       btn.addEventListener("click",()=>{
         window.location = '../html/payment.html'
       })
})
