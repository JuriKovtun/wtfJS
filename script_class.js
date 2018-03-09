// const database = [{className: "cookie", captionTag: "h4", captionText: "Plätzchen 001", imageAdress: "img/product_pics/cookies/cookies001.jpg", ingredients: "Lorem ipsum dolor sit amet, his oratio ancillae ea, vidit malis eirmod eos eu.", price: "111"},
//     {className: "cookie", captionTag: "h4", captionText: "Plätzchen 002", imageAdress: "img/product_pics/cookies/cookies002.jpg", ingredients: "Lorem ipsum dolor sit amet, his oratio ancillae ea, vidit malis eirmod eos eu.", price: "222"},
//     {className: "jam", captionTag: "h4", captionText: "Marmelade 001", imageAdress: "img/product_pics/jam/jam001.jpg", ingredients: "Lorem ipsum dolor sit amet, his oratio ancillae ea, vidit malis eirmod eos eu.", price: "333"},
//     {className: "jam", captionTag: "h4", captionText: "Marmelade 002", imageAdress: "img/product_pics/jam/jam002.jpg", ingredients: "Lorem ipsum dolor sit amet, his oratio ancillae ea, vidit malis eirmod eos eu.", price: "444"},
// ];

// let productTag = "div";
// let productClass = "product__item";
// let captionTag = "h4";
// let captionClass = "product__item-caption";
// let captionInnerHTML = "here I am!";
// let imageClass = "product__item-image";
// let imageSrcValue = "img/product_pics/cookies/cookies001.jpg";
// let imageAltValue = "The tasty cookie!";
// let ingredientsTag = "span";
// let ingredientsClass = "product__item-ingredients";
// let ingredientsInnerHTML = "many of something";
// let priceTag = "span";
// let priceClass = "product__item-price";
// let priceInnerHTML = "111";
//
// let product = document.createElement(productTag);
// product.classList.add(productClass);
//
// let productCaption = document.createElement(captionTag);
// productCaption.classList.add(captionClass);
// productCaption.innerHTML = `${captionInnerHTML}<br>my class: ${captionClass}`;
//
// let productImage = document.createElement("img");
// productImage.classList.add(imageClass);
// productImage.setAttribute("src", imageSrcValue);
// productImage.setAttribute("alt", imageAltValue);
//
// let productIngredients = document.createElement(ingredientsTag);
// productIngredients.classList.add(ingredientsClass);
// productIngredients.innerHTML = `Ingredients: ${ingredientsInnerHTML}`;
//
// let productPrice = document.createElement(priceTag);
// productPrice.classList.add(priceClass);
// productPrice.innerHTML = `Price: ${priceInnerHTML}`;
//
//
// product.appendChild(productCaption);
// product.appendChild(productImage);
// product.appendChild(productIngredients);
// product.appendChild(productPrice);
// document.body.appendChild(product);
//
// console.log(product);


class classProduct {

    constructor(productTag,productClass) {

        this.productTag = productTag;
        this.productClass = productClass;

    }

    render () {
        let product = document.createElement(this.productTag);
        product.classList.add(this.productClass);
        document.body.appendChild(product);
    }

    log () {
        let product = document.createElement(this.productTag);
        product.classList.add(this.productClass);
        return product;
    }



}

let newProduct = new classProduct("div", "superClass");
newProduct.render();


console.log(newProduct.log());


