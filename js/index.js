import { createProduct } from "./functions.js";


const products=document.querySelector(".products");



document.addEventListener("DOMContentLoaded", ()=>{
    fetch("https://strapi-store-server.onrender.com/api/products")
    .then(data=>data.json())
    .then(data=>{
        let data1=data.data;
        data1.forEach(product => {
            let card=createProduct(product);
            // console.log(card);
            products.innerHTML+=card
        });
        const cards=document.querySelectorAll(".product");
        // console.log(cards);
        cards.forEach(card=>{
            card.addEventListener('click', (event)=>{
                let cardId=card.getAttribute("data-id")
                // console.log(card.getAttribute("data-id"));
                window.location.assign(`https://5-oy10-dars-vazifa-v618.vercel.app/pages/detailes.html?id=${cardId}`);
            })
        })
    })
})