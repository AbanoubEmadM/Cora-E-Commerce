let allProducts = [
    {
        id:1,
        img:"../img/products/f1.jpg",
        brand:"adidas",
        title:"Willit Men's UPF 50+ Sun Protection Hoodie Shirt Long Sleeve",
        stars:`<i class="fa-solid fa-star"></i>`,
        price:"$78",
        cartIcon:`<i class="fa-solid fa-cart-shopping"></i>`
    },
    {
        id:2,
        img:"../img/products/f2.jpg",
        brand:"adidas",
        title:"Amazon Essentials Men's Sherpa Lined Full-Zip Hooded Fleece Sweatshirt",
        stars:`<i class="fa-solid fa-star"></i>`,
        price:"$78",
        cartIcon:`<i class="fa-solid fa-cart-shopping"></i>`

    },
    {
        id:3,
        img:"../img/products/f3.jpg",
        brand:"adidas",
        title:"Amazon Essentials Men's Standard Full-Zip Hooded Fleece Sweatshirt",
        stars:`<i class="fa-solid fa-star"></i>`,
        price:"$78",
        cartIcon:`<i class="fa-solid fa-cart-shopping"></i>`

    },
    {
        id:4,
        img:"../img/products/f4.jpg",
        brand:"adidas",
        title:"Cartoon Astronaut T-shirt",
        stars:`<i class="fa-solid fa-star"></i>`,
        price:"$78",
        cartIcon:`<i class="fa-solid fa-cart-shopping"></i>`

    },
    {
        id:5,
        img:"../img/products/f5.jpg",
        brand:"adidas",
        title:"Cartoon Astronaut T-shirt",
        stars:`<i class="fa-solid fa-star"></i>`,
        price:"$78",
        cartIcon:`<i class="fa-solid fa-cart-shopping"></i>`

    },
    {
        id:6,
        img:"../img/products/f6.jpg",
        brand:"adidas",
        title:"Cartoon Astronaut T-shirt",
        stars:`<i class="fa-solid fa-star"></i>`,
        price:"$78",
        cartIcon:`<i class="fa-solid fa-cart-shopping"></i>`

    },
    {
        id:7,
        img:"../img/products/f7.jpg",
        brand:"adidas",
        title:"Cartoon Astronaut T-shirt",
        stars:`<i class="fa-solid fa-star"></i>`,
        price:"$78",
        cartIcon:`<i class="fa-solid fa-cart-shopping"></i>`

    },
    {
        id:8,
        img:"../img/products/f8.jpg",
        brand:"adidas",
        title:"Cartoon Astronaut T-shirt",
        stars:`<i class="fa-solid fa-star"></i>`,
        price:"$78",
        cartIcon:`<i class="fa-solid fa-cart-shopping"></i>`

    },
    {
        id:9,
        img:"../img/products/n1.jpg",
        brand:"adidas",
        title:"Cartoon Astronaut T-shirt",
        stars:`<i class="fa-solid fa-star"></i>`,
        price:"$78",
        cartIcon:`<i class="fa-solid fa-cart-shopping"></i>`
    },
    {
        id:10,
        img:"../img/products/n2.jpg",
        brand:"adidas",
        title:"Cartoon Astronaut T-shirt",
        stars:`<i class="fa-solid fa-star"></i>`,
        price:"$78",
        cartIcon:`<i class="fa-solid fa-cart-shopping"></i>`
    },
    {
        id:11,
        img:"../img/products/n3.jpg",
        brand:"adidas",
        title:"Cartoon Astronaut T-shirt",
        stars:`<i class="fa-solid fa-star"></i>`,
        price:"$78",
        cartIcon:`<i class="fa-solid fa-cart-shopping"></i>`
    },
    {
        id:12,
        img:"../img/products/n4.jpg",
        brand:"adidas",
        title:"Cartoon Astronaut T-shirt",
        stars:`<i class="fa-solid fa-star"></i>`,
        price:"$78",
        cartIcon:`<i class="fa-solid fa-cart-shopping"></i>`
    },
    {
        id:13,
        img:"../img/products/n5.jpg",
        brand:"adidas",
        title:"Cartoon Astronaut T-shirt",
        stars:`<i class="fa-solid fa-star"></i>`,
        price:"$78",
        cartIcon:`<i class="fa-solid fa-cart-shopping"></i>`

    },
    {
        id:14,
        img:"../img/products/n6.jpg",
        brand:"adidas",
        title:"Cartoon Astronaut T-shirt",
        stars:`<i class="fa-solid fa-star"></i>`,
        price:"$78",
        cartIcon:`<i class="fa-solid fa-cart-shopping"></i>`
    },
    {
        id:15,
        img:"../img/products/n7.jpg",
        brand:"adidas",
        title:"Cartoon Astronaut T-shirt",
        stars:`<i class="fa-solid fa-star"></i>`,
        price:"$78",
        cartIcon:`<i class="fa-solid fa-cart-shopping"></i>`
    },
    {
        id:16,
        img:"../img/products/n8.jpg",
        brand:"adidas",
        title:"Cartoon Astronaut T-shirt",
        stars:`<i class="fa-solid fa-star"></i>`,
        price:"$78",
        cartIcon:`<i class="fa-solid fa-cart-shopping"></i>`
    }
];
let allProductsDiv = document.getElementById("all-products");
function drawProducts(){
    allProducts.forEach((product)=>{
        let productDiv =  `
        <div class="product-div col-md-4 col-sm-12">
            <img src=${product.img}>
            <p>${product.brand}</p>
            <p id="title" onclick="showItem(${product.id})" class="title">${product.title}</p>
            <div class="buy">
            <p>${product.stars.repeat(5)}</p>
            <p onclick="addedToCart(${product.id})">${product.cartIcon}</p>
            </div>
            <p class="price">${product.price}</p>
        </div>
        `
        allProductsDiv.innerHTML += productDiv
    })    
}
drawProducts()
let badge = document.getElementById("items-number")
let num = 1;

function checkLoged(){
    if(localStorage.getItem("user_name")){
        badge.style.display = 'block';
        badge.innerHTML = num++;
        swal("Good Job!", "The Item Has Been Added To Your Cart!", "success");
    }
    else{
        badge.style.display = 'none'
        swal("Sorry", "You Have To Register", "error");
        localStorage.removeItem("added_title");
        setTimeout(()=>{
            window.location = '../html/register.html'
        },1000)
    }
}
let hiddenItem = document.getElementById("hidden-item")

function addedToCart(id){
    checkLoged();
    let clickedItem  = allProducts.find((product) =>product.id === id);
    hiddenItem.innerHTML += `
       <div class="cart-item">
        <img src=${clickedItem.img}>
        <span class="brand">${clickedItem.brand} </span><br>
        <h4 class="title">${clickedItem.title}</h4>
        <span class="stars">${clickedItem.stars.repeat(5)}</span>  
            <div class="buy">
                <p class="price">${clickedItem.price} </p>
                <button id="buy-btn" class="buy-btn">Buy Now!</button>
            </div>
       </div>
    `;
    if(localStorage.getItem("user_name")){
        localStorage.setItem("added_title",hiddenItem.innerHTML);
    }else{
        localStorage.removeItem("added_title")
    }
}
function showItem(id){
    let clickedItemNew  = allProducts.find((product) =>product.id === id);
    localStorage.setItem("id",id)
    localStorage.setItem("img",clickedItemNew.img)
    localStorage.setItem("title",clickedItemNew.title)
    localStorage.setItem("price",clickedItemNew.price)
    localStorage.setItem("brand",clickedItemNew.brand)
    window.location = '../html/item-page.html';
}

let allTitles = Array.from(document.querySelectorAll(".title"));

let input = document.querySelector("#search");
let search = document.querySelector("#button");
let allItems = Array.from(document.querySelectorAll(".product-div"));

function filterItems(){
    if(input.value != ''){
        let val = input.value;
        allTitles.forEach(title => {
            for(let i = 0; i < title.textContent; i++){
                let filteredItem = allTitles.filter(title => title.textContent[i] === val);
                allProductsDiv.innerHTML = ''
                filteredItem.forEach(ele => {
                    allProductsDiv.innerHTML += `
                    <div class="product-div col-md-4 col-sm-12">${ele.parentElement.innerHTML}</div>
                    `;

                })
            }
        })
    }else{
        drawProducts()
    }
}