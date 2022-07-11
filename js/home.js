
    //create products using template literals
let productsData = [
    {
        id:1,
        img:"img/products/f1.jpg",
        brand:"adidas",
        title:"Cartoon Astronaut T-shirt",
        stars:`<i class="fa-solid fa-star"></i>`,
        price:"$78",
        cartIcon:`<i class="fa-solid fa-cart-shopping"></i>`
    },
    {
        id:2,
        img:"img/products/f2.jpg",
        brand:"adidas",
        title:"Cartoon Astronaut T-shirt",
        stars:`<i class="fa-solid fa-star"></i>`,
        price:"$78",
        cartIcon:`<i class="fa-solid fa-cart-shopping"></i>`

    },
    {
        id:3,
        img:"img/products/f3.jpg",
        brand:"adidas",
        title:"Cartoon Astronaut T-shirt",
        stars:`<i class="fa-solid fa-star"></i>`,
        price:"$78",
        cartIcon:`<i class="fa-solid fa-cart-shopping"></i>`

    },
    {
        id:4,
        img:"img/products/f4.jpg",
        brand:"adidas",
        title:"Cartoon Astronaut T-shirt",
        stars:`<i class="fa-solid fa-star"></i>`,
        price:"$78",
        cartIcon:`<i class="fa-solid fa-cart-shopping"></i>`

    },
    {
        id:5,
        img:"img/products/f5.jpg",
        brand:"adidas",
        title:"Cartoon Astronaut T-shirt",
        stars:`<i class="fa-solid fa-star"></i>`,
        price:"$78",
        cartIcon:`<i class="fa-solid fa-cart-shopping"></i>`

    },
    {
        id:6,
        img:"img/products/f6.jpg",
        brand:"adidas",
        title:"Cartoon Astronaut T-shirt",
        stars:`<i class="fa-solid fa-star"></i>`,
        price:"$78",
        cartIcon:`<i class="fa-solid fa-cart-shopping"></i>`

    },
    {
        id:7,
        img:"img/products/f7.jpg",
        brand:"adidas",
        title:"Cartoon Astronaut T-shirt",
        stars:`<i class="fa-solid fa-star"></i>`,
        price:"$78",
        cartIcon:`<i class="fa-solid fa-cart-shopping"></i>`

    },
    {
        id:8,
        img:"img/products/f8.jpg",
        brand:"adidas",
        title:"Cartoon Astronaut T-shirt",
        stars:`<i class="fa-solid fa-star"></i>`,
        price:"$78",
        cartIcon:`<i class="fa-solid fa-cart-shopping"></i>`

    }
];

let productsDiv = document.getElementById("products")

productsData.forEach(product => {
    let productItem = `
        <div class="product col-lg-3 col-md-6 col-sm-12">
            <img src=${product.img}>
            <span class="brand">${product.brand} </span>
            <h4 onclick="addedToCart(${product.id})" class="title">${product.title}</h4>
            <span>${product.stars.repeat(5)}</span>
                <div class="product-pr-cart">
                    <p>${product.price} </p>
                    <span onclick="addedToCart(${product.id})" id="cart-item" class="cart-item">${product.cartIcon}</span>
                </div>
        </div>
    `
    productsDiv.innerHTML += productItem
})

let addedItem = document.getElementById("added-item")
let hiddenItem = document.getElementById("hidden-item")

function addedToCart(id){
    checkLoged();
    let clickedItem  = productsData.find((product) =>product.id === id);
    hiddenItem.innerHTML += `
       <div class="cart-item col-lg-3 col-md-4 col-sm-12">
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
    localStorage.setItem("added_title",hiddenItem.innerHTML);
}

let badge = document.getElementById("items-number")
let num = 1;
function checkLoged(){
    if(localStorage.getItem("user_name")){
        badge.style.display = 'block'
        badge.innerHTML = num++;    
    }
    else{
        localStorage.removeItem("added_title")
        badge.style.display = 'none'
        setTimeout(()=>{
            window.location = 'register.html'
        },1000)
        swal("Sorry", "You Have To Register", "error");
    }
}


let newArrivalData = [
    {
        id:1,
        img:"img/products/n1.jpg",
        brand:"adidas",
        title:"Cartoon Astronaut T-shirt",
        stars:`<i class="fa-solid fa-star"></i>`,
        price:"$78",
        cartIcon:`<i class="fa-solid fa-cart-shopping"></i>`
    },
    {
        id:2,
        img:"img/products/n2.jpg",
        brand:"adidas",
        title:"Cartoon Astronaut T-shirt",
        stars:`<i class="fa-solid fa-star"></i>`,
        price:"$78",
        cartIcon:`<i class="fa-solid fa-cart-shopping"></i>`
    },
    {
        id:3,
        img:"img/products/n3.jpg",
        brand:"adidas",
        title:"Cartoon Astronaut T-shirt",
        stars:`<i class="fa-solid fa-star"></i>`,
        price:"$78",
        cartIcon:`<i class="fa-solid fa-cart-shopping"></i>`
    },
    {
        id:4,
        img:"img/products/n4.jpg",
        brand:"adidas",
        title:"Cartoon Astronaut T-shirt",
        stars:`<i class="fa-solid fa-star"></i>`,
        price:"$78",
        cartIcon:`<i class="fa-solid fa-cart-shopping"></i>`
    }
];
let newArrivalDiv = document.getElementById("new-arrival")

newArrivalData.forEach(product => {
    let newArrivalItem = `
    <div class="product col-lg-3 col-md-6 col-sm-12">
        <img src=${product.img}> 
        <span class="brand">${product.brand} </span>
        <h4 onclick="showItem(${product.id})" class="title">${product.title}</h4>
            <span>${product.stars.repeat(5)}</span>
                <div class="product-pr-cart">
                    <p>${product.price} </p>
                    <span onclick="addNewArrivalToCart(${product.id})" id="cart-item" class="cart-item">${product.cartIcon}</span>
                </div>
    </div>
    `
    newArrivalDiv.innerHTML += newArrivalItem
})

function showItem(id){
    let clickedItemNew  = newArrivalData.find((product) =>product.id === id);
    localStorage.setItem("id",id)
    localStorage.setItem("img",clickedItemNew.img)
    localStorage.setItem("title",clickedItemNew.title)
    localStorage.setItem("price",clickedItemNew.price)
    localStorage.setItem("brand",clickedItemNew.brand)
    window.location = 'item-page.html';
}

function addNewArrivalToCart(id){
    checkLoged();
    let clickedItem  = newArrivalData.find((product) =>product.id === id);
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
    localStorage.setItem("added_title",hiddenItem.innerHTML);
}