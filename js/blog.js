let blogItems = [
    {
        img:'img/blog/b1.jpg',
        title:"The Cotton-jersey Zip-Up Hoodie",
        desc:"Kickstarter man braid godard coloring book.Raclette waistcoot Selfies wolf charteuse hexagon irony",
        readMore:"continue reading"
    },
    {
        img:'img/blog/b2.jpg',
        title:"The Cotton-jersey Zip-Up Hoodie",
        desc:"Kickstarter man braid godard coloring book.Raclette waistcoot Selfies wolf charteuse hexagon irony",
        readMore:"continue reading"
    },
    {
        img:'img/blog/b3.jpg',
        title:"The Cotton-jersey Zip-Up Hoodie",
        desc:"Kickstarter man braid godard coloring book.Raclette waistcoot Selfies wolf charteuse hexagon irony",
        readMore:"continue reading"
    },
    {
        img:'img/blog/b4.jpg',
        title:"The Cotton-jersey Zip-Up Hoodie",
        desc:"Kickstarter man braid godard coloring book.Raclette waistcoot Selfies wolf charteuse hexagon irony",
        readMore:"continue reading"
    },
    {
        img:'img/blog/b6.jpg',
        title:"The Cotton-jersey Zip-Up Hoodie",
        desc:"Kickstarter man braid godard coloring book.Raclette waistcoot Selfies wolf charteuse hexagon irony",
        readMore:"continue reading"
    }
]
let blogDiv = document.getElementById("blog");

blogItems.forEach(item=>{
    let blogItem = `
    <div class="blog-item">
        <div class="blog-img" style="background:url('${item.img}');    background-position: center;
        background-size: cover;
    ">
        </div>
        <div class="blog-content">
            <h2>${item.title}</h2>
            <p>${item.desc}</p>
            <span>${item.readMore}<i class="fa-solid fa-horizontal-rule"></i></span>
        </div>
    </div>
    `
    blogDiv.innerHTML += blogItem
})
{/* <img src=${item.img}> */}