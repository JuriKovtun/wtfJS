const button = document.querySelector(".button");
const counterOutput = document.querySelector(".output__counter");
const positionOutput = document.querySelector(".output__position");
const container = document.querySelector(".container");
let counter = 0,
  pageX = null,
  pageY = null,
  foo = `x: ${pageX} <br /> y: ${pageY}`;

counterOutput.innerHTML = counter;
positionOutput.innerHTML = foo;

button.addEventListener("click", () => {
  ++counter;
  counterOutput.innerHTML = counter;
});
button.addEventListener("mousemove", e => {
  e.stopPropagation();
});
// button.addEventListener("mousedown", () => {
//   container.addEventListener("mousemove", moveButton);
// });

// button.addEventListener("mouseup", () => {
//   container.removeEventListener("mousemove", moveButton);
// });

const moveButton = ({ pageY, pageX }) => {
  foo = `x: ${pageX} <br /> y: ${pageY}`;
  positionOutput.innerHTML = foo;
  button.style.left = pageX - 40 + "px";
  button.style.top = pageY - 11 + "px";
};

const startDragging = () => {
  console.log("dragging started");
  container.addEventListener("mousemove", moveButton);
};

startDragging();
