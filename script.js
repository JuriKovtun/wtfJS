const database = ["Caption Text","image url","Ingredients","price"];

let productTemplate = database;

let  product = document.createElement("div");
product.classList.add("product");

for (let i=0; i<productTemplate.length; i++) {
    product.innerHTML = productTemplate[i];
    document.body.appendChild(product);
}


console.log(productTemplate);







