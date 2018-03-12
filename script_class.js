// const database = [{className: "cookie", captionTag: "h4", captionText: "Plätzchen 001", imageAdress: "img/product_pics/cookies/cookies001.jpg", ingredients: "Lorem ipsum dolor sit amet, his oratio ancillae ea, vidit malis eirmod eos eu.", price: "111"},
//     {className: "cookie", captionTag: "h4", captionText: "Plätzchen 002", imageAdress: "img/product_pics/cookies/cookies002.jpg", ingredients: "Lorem ipsum dolor sit amet, his oratio ancillae ea, vidit malis eirmod eos eu.", price: "222"},
//     {className: "jam", captionTag: "h4", captionText: "Marmelade 001", imageAdress: "img/product_pics/jam/jam001.jpg", ingredients: "Lorem ipsum dolor sit amet, his oratio ancillae ea, vidit malis eirmod eos eu.", price: "333"},
//     {className: "jam", captionTag: "h4", captionText: "Marmelade 002", imageAdress: "img/product_pics/jam/jam002.jpg", ingredients: "Lorem ipsum dolor sit amet, his oratio ancillae ea, vidit malis eirmod eos eu.", price: "444"},
// ];

class classProduct {

    constructor(imageSrcValue, captionInnerHTML, ingredientsInnerHTML, priceInnerHTML) {

        this.imageSrcValue = imageSrcValue;
        this.captionInnerHTML = captionInnerHTML;
        this.ingredientsInnerHTML = ingredientsInnerHTML;
        this.priceInnerHTML = priceInnerHTML;
    }

    render() {
        let product = document.createElement("div");
        product.classList.add("product__item");

        let productImage = document.createElement("img");
        productImage.classList.add("product__item-image");
        productImage.setAttribute("src", this.imageSrcValue);
        productImage.setAttribute("alt", "image error");

        let productCaption = document.createElement("h4");
        productCaption.classList.add("product__item-caption");
        productCaption.innerHTML = `${this.captionInnerHTML}`;

                let productIngredients = document.createElement("span");
        productIngredients.classList.add("product__item-ingredients");
        productIngredients.innerHTML = `Ingredients: ${this.ingredientsInnerHTML}`;

        let productPrice = document.createElement("span");
        productPrice.classList.add("product__item-price");
        productPrice.innerHTML = `Price: ${this.priceInnerHTML}`;

        product.appendChild(productImage);
        product.appendChild(productCaption);
        product.appendChild(productIngredients);
        product.appendChild(productPrice);
        document.body.appendChild(product);

        console.log(product);
    }


}

let newProduct = new classProduct("img/product_pics/cookies/cookies001.jpg", "Cookie on the plate", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "111");
newProduct.render();

let newProduct01 = new classProduct("img/product_pics/cookies/cookies001.jpg", "Cookie on the plate", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "111");
newProduct01.render();



