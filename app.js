const wrapper=document.querySelector(".sliderwrapper")
const menuitems=document.querySelectorAll(".menuitem")

const products = [
    {
        id:1,
        title: "Air Force",
        price: 299,
        colors:[

            {
                code: "black",
                img: "./image/air.png",
            },
            {
                 code:"darkblue",
                img: "./image/air2.png",
            },
        ],
    },
    {
        id:2,
        title: "Air Jorden",
        price: 299,
        colors:[

            {
                code: "lightgray",
                img: "./image/jordan.png",
            },
            {
                 code:"green",
                img: "./image/jordan2.png",
            },
        ],
    },
    {
        id:3,
        title: "Blazer",
        price: 299,
        colors:[

            {
                code: "whitesmoke",
                img: "./image/blazer.png",
            },
            {
                 code:"green",
                img: "./image/blazer2.png",
            },
        ],
    },
    {
        id:4,
        title: "Crater",
        price: 299,
        colors:[

            {
                code: "black",
                img: "./image/crater.png"
            },
            {
                 code:"lightgray",
                img: "./image/crater2.png",
            },
        ],
    },
    {
        id:5,
        title: "Hippie",
        price: 229,
        colors: [

            {
                code: "gray",
                img: "./image/hippie.png",
            },
            {
                 code:"black",
                img: "./image/hippie2.png",
            },
        ],
    },
]
let choosenProduct =products[0]
const currentProductImg = document.querySelector(".productimg");
const currentProductTittle = document.querySelector(".producttittle");
const currentProductPrice = document.querySelector(".productprice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");



menuitems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        choosenProduct=products[index]


        currentProductTittle.textContent= choosenProduct.title
        currentProductPrice.textContent= 'RS.'+ choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img

        currentProductColors.forEach((color,index) => {
            color.style.backgroundColor=choosenProduct.colors[index].code;

        })
    })
}) 
currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",() => {
currentProductImg.src=choosenProduct.colors[index].img;
    })
})
currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor="white"
            size.style.color="black"

        })
        size.style.backgroundColor="black"
        size.style.color="white"
    })
})
const productButton =document.querySelector(".productbutton")
const payment = document.querySelector(".payment")
const close =document.querySelector(".close")

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
})
close.addEventListener("click",()=>{
    payment.style.display="none";
})