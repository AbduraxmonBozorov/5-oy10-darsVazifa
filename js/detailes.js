import { createDetailes } from "./functions.js";

const right=document.querySelector(".right");


document.addEventListener("DOMContentLoaded", ()=>{

    let url=window.location.href
    let productId=url.split("id=")[1]
    if(!productId){
        window.location.assign("http://127.0.0.1:5500/index.html");
    }
    console.log(productId);
    fetch(`https://strapi-store-server.onrender.com/api/products/${productId}`)
    .then(data=>data.json())
    .then(data=>{
        let product=data.data
        console.log(product);
        let card=createDetailes(product);
        right.innerHTML=card;

        const form=document.querySelector("form");

        const color=document.querySelectorAll(".color");
        console.log(color);
        let slct=true;
        color.forEach(item=>{
            item.addEventListener("click", ()=>{
                item.style.outlineColor="red"

            })
        })

        form.addEventListener("submit",(event)=>{
            event.preventDefault();
            let id=product.id
            console.log(id);
            let count=document.querySelector("select").value

            window.location.assign(`http://127.0.0.1:5500/pages/detailes.html?id=19&count=${count}`);   
        })
    })
})