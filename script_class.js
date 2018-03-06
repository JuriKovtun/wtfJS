const database = [{className: "cookie", captionTag: "h4", captionText: "Plätzchen 001", imageAdress: "img/product_pics/cookies/cookies001.jpg", ingredients: "Lorem ipsum dolor sit amet, his oratio ancillae ea, vidit malis eirmod eos eu.", price: "111"},
    {className: "cookie", captionTag: "h4", captionText: "Plätzchen 002", imageAdress: "img/product_pics/cookies/cookies002.jpg", ingredients: "Lorem ipsum dolor sit amet, his oratio ancillae ea, vidit malis eirmod eos eu.", price: "222"},
    {className: "jam", captionTag: "h4", captionText: "Marmelade 001", imageAdress: "img/product_pics/jam/jam001.jpg", ingredients: "Lorem ipsum dolor sit amet, his oratio ancillae ea, vidit malis eirmod eos eu.", price: "333"},
    {className: "jam", captionTag: "h4", captionText: "Marmelade 002", imageAdress: "img/product_pics/jam/jam002.jpg", ingredients: "Lorem ipsum dolor sit amet, his oratio ancillae ea, vidit malis eirmod eos eu.", price: "444"},
];

let tagName = "h4";
let classValue = "cookie";
let attrSrc = "src";
let srcValue = "img/product_pics/cookies/cookies001.jpg";
let attrAlt = "alt";
let altValue = "The tasty cookie!";
let innerHtmlValue = "here I am!";
let ingredients = "many of something";
let priceValue = "111";

let product = document.createElement("div");
product.classList.add("product__item");

let productCaption = document.createElement(tagName);
productCaption.classList.add(classValue);
productCaption.innerHTML = `${innerHtmlValue}<br>my class: ${classValue}`;

let productImage = document.createElement("img");
productImage.classList.add(classValue);
productImage.setAttribute(attrSrc, srcValue);
productImage.setAttribute(attrAlt, altValue);

let productIngredients = document.createElement("span");
productIngredients.classList.add(classValue);
productIngredients.innerHTML = `Ingredients: ${ingredients}`;

let productPrice = document.createElement("span");
productPrice.classList.add(classValue);
productPrice.innerHTML = `Price: ${priceValue}`;


product.appendChild(productCaption);
product.appendChild(productImage);
product.appendChild(productIngredients);
product.appendChild(productPrice);
document.body.appendChild(product);

console.log(product);


