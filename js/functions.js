function createProduct(product){
    return `
         <div class="product" data-id="${product.id}">
            <img src="${product.attributes.image}" alt="${product.attributes.title}">
            <h3 class="product__title">${product.attributes.title}</h3>
            <p class="product__price">$${product.attributes.price/100}</p>
        </div>
    `
}


function createDetailes(product){
    return `
         <div class="rightContent ">
                <h1>${product.attributes.title}</h1>
                <strong>${product.attributes.company}</strong>
                <section>$${product.attributes.price/100}</section>
                <p>${product.attributes.description}</p>
                <form class="form">
                    <h2>Colors</h2>
                    <div class="selectColor">
                        <span class="color color1" style="background: ${product.attributes.colors[0]}" data-color="${product.attributes.colors[0]}"></span>
                        <span class="color color2" style="background: ${product.attributes.colors[1]}" data-color="${product.attributes.colors[1]}"></span>
                    </div>
                    <h3>Amount</h3>
                    <select name="count" id="count">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <button>ADD TO BAG</button>
                </form>
            </div>
    `
}

function createShop(product, id, count){
    return `
        <div class="shop">
                <img src="${product.attributes.image}"
                    alt="shop img">
                <div class="title">
                    <h2>${product.attributes.title}</h2>
                    <h3>${product.attributes.company}</h3>
                </div>
                <div class="count">
                    <h2>Count</h2>
                    <input type="number" name="count" id="count" value="${count}">
                    <button>Remove</button>
                </div>
                <div class="price">
                    <h2>$${product.attributes.price/100}</h2>
                </div>
                <div class="totalPrice">
                    <table>
                        <tr>
                            <td>Subtotal</td>
                            <td>$${(product.attributes.price/100)*count}</td>
                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td>$5.0</td>
                        </tr>
                        <tr>
                            <td>Tax</td>
                            <td>$40.0</td>
                        </tr>
                        <tr>
                            <td>Order Total</td>
                            <td>$${(product.attributes.price/100)*count + 45}</td>
                        </tr>
                    </table>
                </div>
            </div>
    `
}


export{createProduct, createDetailes, createShop};