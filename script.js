const database = ["Caption Text", "image url", "Ingredients", "price"];

let productTemplate = database;


for (let i = 0; i < productTemplate.length; i++) {
    let product = document.createElement("div");
    product.classList.add("product");
    product.innerHTML = productTemplate[i];
    document.body.appendChild(product);

    console.log(product);
}










