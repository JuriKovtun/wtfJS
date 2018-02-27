let elementName = "div";
let attrClass = "class";
let classValue = "newClass";
let attrSrc = "src";
let srcValue = "disk/file.jpg";
let attrAlt = "alt";
let altValue = "the picture";
let innerHtmlValue = "here I am!";

let product = document.createElement(elementName);
product.setAttribute(attrClass, classValue);
product.setAttribute(attrSrc, srcValue);
product.setAttribute(attrAlt, altValue);
product.innerHTML = `${innerHtmlValue}<br>my class: ${classValue}`;

document.body.appendChild(product);

console.log(product);
alert(product);