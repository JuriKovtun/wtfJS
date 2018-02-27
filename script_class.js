let elementName = "div";
let attrClass = "class";
let classValue = "newClass";
let attrSrc = "src";
let srcValue = "disk/file.jpg";
let attrAlt = "alt";
let altValue = "the picture";

let product = document.createElement(elementName);
product.setAttribute(attrClass,classValue);
product.setAttribute(attrSrc,srcValue);
product.setAttribute(attrAlt,altValue);

console.log(product);