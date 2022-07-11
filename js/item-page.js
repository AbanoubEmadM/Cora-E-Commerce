let itemPage = document.getElementById("item-page")
let arrTest = ['LEARN HOW TO BUILD AND DEPLOY FULL RESPONSIVE ECOMMERCE WEBSITE USING HTML CSS & JAVASCRIPT. This is a free HTML CSS Course. And in this course we will learn how to build and deploy a full multipage ecommerce website completely from scratch step by step. Will Create from responsive navbar using html CSS JavaScript to responsive footer in one video.'
,'LEARN sss TO BUILD AND DEPLOY FULL RESPONSIVE ECOMMERCE WEBSITE USING HTML CSS & JAVASCRIPT. This is a free HTML CSS Course. And in this course we will learn how to build and deploy a full multipage ecommerce website completely from scratch step by step. Will Create from responsive navbar using html CSS JavaScript to responsive footer in one video.'
,'LEARN HOW TO BUILD AND DEPLOY FULL RESPONSIVE ECOMMERCE WEBSITE USING HTML CSS & JAVASCRIPT. This is a free HTML CSS Course. And in this course we will learn how to build and deploy a full multipage ecommerce website completely from scratch step by step. Will Create from responsive navbar using html CSS JavaScript to responsive footer in one video.','aLEARN HOW TO BUILD AND DEPLOY FULL RESPONSIVE ECOMMERCE WEBSITE USING HTML CSS & JAVASCRIPT. This is a free HTML CSS Course. And in this course we will learn how to build and deploy a full multipage ecommerce website completely from scratch step by step. Will Create from responsive navbar using html CSS JavaScript to responsive footer in one video.','LEARN HOW TO BUILD AND DEPLOY FULL RESPONSIVE ECOMMERCE WEBSITE USING HTML CSS & JAVASCRIPT. This is a free HTML CSS Course. And in this course we will learn how to build and deploy a full multipage ecommerce website completely from scratch step by step. Will Create from responsive navbar using html CSS JavaScript to responsive footer in one video.','LEARN HOW TO BUILD AND DEPLOY FULL RESPONSIVE ECOMMERCE WEBSITE USING HTML CSS & JAVASCRIPT. This is a free HTML CSS Course. And in this course we will learn how to build and deploy a full multipage ecommerce website completely from scratch step by step. Will Create from responsive navbar using html CSS JavaScript to responsive footer in one video.','LEARN HOW TO BUILD AND DEPLOY FULL RESPONSIVE ECOMMERCE WEBSITE USING HTML CSS & JAVASCRIPT. This is a free HTML CSS Course. And in this course we will learn how to build and deploy a full multipage ecommerce website completely from scratch step by step. Will Create from responsive navbar using html CSS JavaScript to responsive footer in one video.','LEARN HOW TO BUILD AND DEPLOY FULL RESPONSIVE ECOMMERCE WEBSITE USING HTML CSS & JAVASCRIPT. This is a free HTML CSS Course. And in this course we will learn how to build and deploy a full multipage ecommerce website completely from scratch step by step. Will Create from responsive navbar using html CSS JavaScript to responsive footer in one video.']

let numOfDesc = +localStorage.getItem("id")
itemPage.innerHTML = `
   <div class="clicked-item">
    <img src=${localStorage.getItem("img")}>
        <div class="item-content">
        <p class="catogery">Men's Fashion T Shirt</p>
            <p class="title">${localStorage.getItem("title")}</p>
            <p class="price">${localStorage.getItem("price")}</p>
            <button onclick="addToCart()">Buy Now!</button>
            <p class="desc">${arrTest[numOfDesc]}</p>
        </div>
   </div>
`
function addToCart(){
    localStorage.setItem("added_title",itemPage.innerHTML);
    window.location = 'payment.html'
}