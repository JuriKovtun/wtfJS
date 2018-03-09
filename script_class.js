// const database = [{className: "cookie", captionTag: "h4", captionText: "Plätzchen 001", imageAdress: "img/product_pics/cookies/cookies001.jpg", ingredients: "Lorem ipsum dolor sit amet, his oratio ancillae ea, vidit malis eirmod eos eu.", price: "111"},
//     {className: "cookie", captionTag: "h4", captionText: "Plätzchen 002", imageAdress: "img/product_pics/cookies/cookies002.jpg", ingredients: "Lorem ipsum dolor sit amet, his oratio ancillae ea, vidit malis eirmod eos eu.", price: "222"},
//     {className: "jam", captionTag: "h4", captionText: "Marmelade 001", imageAdress: "img/product_pics/jam/jam001.jpg", ingredients: "Lorem ipsum dolor sit amet, his oratio ancillae ea, vidit malis eirmod eos eu.", price: "333"},
//     {className: "jam", captionTag: "h4", captionText: "Marmelade 002", imageAdress: "img/product_pics/jam/jam002.jpg", ingredients: "Lorem ipsum dolor sit amet, his oratio ancillae ea, vidit malis eirmod eos eu.", price: "444"},
// ];

class classProduct {

    constructor(productClass, captionClass, captionInnerHTML, imageClass, imageSrcValue, imageAltValue, ingredientsClass, ingredientsInnerHTML, priceClass, priceInnerHTML) {

        this.productClass = productClass;
        this.captionClass = captionClass;
        this.captionInnerHTML = captionInnerHTML;
        this.imageClass = imageClass;
        this.imageSrcValue = imageSrcValue;
        this.imageAltValue = imageAltValue;
        this.ingredientsClass = ingredientsClass;
        this.ingredientsInnerHTML = ingredientsInnerHTML;
        this.priceClass = priceClass;
        this.priceInnerHTML = priceInnerHTML;


    }

    render() {
        let product = document.createElement("div");
        product.classList.add(this.productClass);

        let productCaption = document.createElement("h4");
        productCaption.classList.add(this.captionClass);
        productCaption.innerHTML = `${this.captionInnerHTML}<br>my class: ${this.captionClass}`;

        let productImage = document.createElement("img");
        productImage.classList.add(this.imageClass);
        productImage.setAttribute("src", this.imageSrcValue);
        productImage.setAttribute("alt", this.imageAltValue);

        let productIngredients = document.createElement("span");
        productIngredients.classList.add(this.ingredientsClass);
        productIngredients.innerHTML = `Ingredients: ${this.ingredientsInnerHTML}`;

        let productPrice = document.createElement("span");
        productPrice.classList.add(this.priceClass);
        productPrice.innerHTML = `Price: ${this.priceInnerHTML}`;


        product.appendChild(productCaption);
        product.appendChild(productImage);
        product.appendChild(productIngredients);
        product.appendChild(productPrice);
        document.body.appendChild(product);

        console.log(product);


    }


}

let newProduct = new classProduct("product__item", "product__item-caption", "here I am!", "product__item-image", "img/product_pics/cookies/cookies001.jpg", "The tasty cookie!", "product__item-ingredients", "many of something", "product__item-price", "111");
newProduct.render();



