import { createShop } from "./functions.js";
const selectedProducts=document.querySelector(".selected-products");

document.addEventListener("DOMContentLoaded", ()=>{
    let url=window.location.href;
    let count=url.split("count=")[1];
    let url1=url.split("&");
    let str1=url1[0]
    let arr=str1.split("id=");
    let id=arr[1]

    fetch(`https://strapi-store-server.onrender.com/api/products/${id}`)
    .then(data=>data.json())
    .then(data=>{
        let shop=createShop(data.data, id, count);
        selectedProducts.innerHTML=shop;
        
    })


})