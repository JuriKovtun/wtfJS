const database = [{productCategory: "01cookie", imageSrcValue: "../img/product_pics/cookies/cookies001.jpg", captionInnerHTML: "Plätzchen 001", priceInnerHTML: "111", ingredientsInnerHTML: "Lorem ipsum dolor sit amet, his oratio ancillae ea, vidit malis eirmod eos eu."},
    {productCategory: "01cookie", imageSrcValue: "../img/product_pics/cookies/cookies002.jpg", captionInnerHTML: "Plätzchen 002", priceInnerHTML: "222",  ingredientsInnerHTML: "Lorem ipsum dolor sit amet, his oratio ancillae ea, vidit malis eirmod eos eu."},
    {productCategory: "02jam", imageSrcValue: "../img/product_pics/jam/jam001.jpg", captionInnerHTML: "Marmelade 001", priceInnerHTML: "333",  ingredientsInnerHTML: "Lorem ipsum dolor sit amet, his oratio ancillae ea, vidit malis eirmod eos eu."},
    {productCategory: "02jam", imageSrcValue: "../img/product_pics/jam/jam002.jpg", captionInnerHTML: "Marmelade 002", priceInnerHTML: "444",  ingredientsInnerHTML: "Lorem ipsum dolor sit amet, his oratio ancillae ea, vidit malis eirmod eos eu."},
];

class productItem {

    constructor(imageSrcValue, captionInnerHTML, priceInnerHTML, ingredientsInnerHTML) {

        this.imageSrcValue = imageSrcValue;
        this.captionInnerHTML = captionInnerHTML;
        this.priceInnerHTML = priceInnerHTML;
        this.ingredientsInnerHTML = ingredientsInnerHTML;

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

        let productPrice = document.createElement("span");
        productPrice.classList.add("product__item-price");
        productPrice.innerHTML = `Цена: ${this.priceInnerHTML}`;

        let productIngredients = document.createElement("span");
        productIngredients.classList.add("product__item-ingredients");
        productIngredients.innerHTML = `Ингридиенты: ${this.ingredientsInnerHTML}`;

        product.appendChild(productImage);
        product.appendChild(productCaption);
        product.appendChild(productPrice);
        product.appendChild(productIngredients);
        document.body.appendChild(product);

    }


}


// working iterator
database.forEach(item => {
    let newItem = new productItem(item['imageSrcValue'], item['captionInnerHTML'], item['priceInnerHTML'], item['ingredientsInnerHTML']);
    newItem.render();
});


// const arrayOfObjects = [{name:"Bilbo", secondname:"Baggins"}, {name:"Gandalf", secondname:"Gray"}, {name:"Nazgul", secondname:"Dark"}];
//
// // arrayOfObjects.forEach(item => {
// //     Object.keys(item).forEach(prop => {
// //         console.log(item[prop]);
// //     });
// //
// // });
//
// arrayOfObjects.forEach(item => {
//     // console.log(item);
//     let unit = Object.keys(item);
//     console.log(unit);
//     // unit.forEach(prop => {
//     //     console.log(prop);
//     // });
//
//
// });


