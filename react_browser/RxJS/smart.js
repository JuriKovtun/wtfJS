const button = document.querySelector(".button");
const counterOutput = document.querySelector(".output__counter");
const positionOutput = document.querySelector(".output__position");
const container = document.querySelector(".container");

let pageX = null,
  pageY = null,
  positionString = `x: ${pageX} <br /> y: ${pageY}`;

counterOutput.innerHTML = 0;
positionOutput.innerHTML = positionString;

const moveButton = ({ pageX, pageY }) => {
  let positionString = `x: ${pageX} <br /> y: ${pageY}`;
  positionOutput.innerHTML = positionString;
  button.style.left = pageX - 40 + "px";
  button.style.top = pageY - 11 + "px";
};

Rx.Observable.fromEvent(button, "click")
  .scan(count => count + 1, 0)
  .subscribe(count => {
    console.log(`Clicked ${count} times`);
    counterOutput.innerHTML = count;
  });

Rx.Observable.fromEvent(container, "mousemove").subscribe(e => moveButton(e));
