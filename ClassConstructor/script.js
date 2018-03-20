const database = [{productCategory: "01cookie", imageSrcValue: "../img/product_pics/cookies/cookies001.jpg", productCaption: "Plätzchen 001", productPrice: "111", productComposition: "Lorem ipsum dolor sit amet, his oratio ancillae ea, vidit malis eirmod eos eu."},
    {productCategory: "01cookie", imageSrcValue: "../img/product_pics/cookies/cookies002.jpg", productCaption: "Plätzchen 002", productPrice: "222",  productComposition: "Lorem ipsum dolor sit amet, his oratio ancillae ea, vidit malis eirmod eos eu."},
    {productCategory: "02jam", imageSrcValue: "../img/product_pics/jam/jam001.jpg", productCaption: "Marmelade 001", productPrice: "333",  productComposition: "Lorem ipsum dolor sit amet, his oratio ancillae ea, vidit malis eirmod eos eu."},
    {productCategory: "02jam", imageSrcValue: "../img/product_pics/jam/jam002.jpg", productCaption: "Marmelade 002", productPrice: "444",  productComposition: "Lorem ipsum dolor sit amet, his oratio ancillae ea, vidit malis eirmod eos eu."},
];

class Product {

    constructor(productCategory, imageSrcValue, productCaption, productPrice, productComposition) {

        this.productCategory = productCategory;
        this.imageSrcValue = imageSrcValue;
        this.productCaption = productCaption;
        this.productPrice = productPrice;
        this.productComposition = productComposition;

    }

    render() {
        let product = document.createElement("div");
        product.classList.add("product__item");
        product.setAttribute("productCategory", this.productCategory);

        let productImage = document.createElement("img");
        productImage.classList.add("product__item-image");
        productImage.setAttribute("src", this.imageSrcValue);
        productImage.setAttribute("alt", "image error");

        let productCaption = document.createElement("h4");
        productCaption.classList.add("product__item-caption");
        productCaption.innerHTML = `${this.productCaption}`;

        let productPrice = document.createElement("span");
        productPrice.classList.add("product__item-price");
        productPrice.innerHTML = `Цена: ${this.productPrice}`;

        let productIngredients = document.createElement("span");
        productIngredients.classList.add("product__item-ingredients");
        productIngredients.innerHTML = `Ингридиенты: ${this.productComposition}`;

        product.appendChild(productImage);
        product.appendChild(productCaption);
        product.appendChild(productPrice);
        product.appendChild(productIngredients);
        document.body.appendChild(product);
        return this;
    }


}


// working iterator

// let productArray = database.map(item => new Product(item['productCategory'], item['imageSrcValue'], item['productCaption'], item['productPrice'], item['productComposition']).render());







// sandbox

const arrayOfObjects = [
                        {"person1":{name:"Bilbo",secondname:"Baggins"}},
                        {"person2":{name:"Gandalf",secondname:"Gray"}},
                        {"person3":{name:"Nazgul",secondname:"Dark"}}
                        ];






let out = arrayOfObjects.map(item => Object.keys(item)[0]);
console.log(out);

let output = arrayOfObjects[0]['person1']['name'];
console.log(output);




// let hui = Object.keys(arrayOfObjects[0]);
// let wam = Object.keys(arrayOfObjects[1]);
// let out = [];
// out.push(hui[0]);
// out.push(wam[0]);
//
// console.log(out);

// let put = ["a", "b", "c"];
// console.log(put);



// function productCategory () {
//     return "jam"
// }
//
// console.log(productCategory());





