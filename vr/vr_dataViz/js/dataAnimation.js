const defaultDataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
const url = "http://localhost:3000/";
const offset = -1;
const size = 0.15;
const delay = 250;

const getRandomInt = max => Math.floor(Math.random() * max);
const generateDataset = () => new Array(9).fill().map(() => getRandomInt(31));
const validateInt = int => (int == 0 ? Math.pow(10, -10) : int);

////// Building initial scene
const initialRender = (dataset = defaultDataset) => {
  d3.select("body")
    .append("a-scene")
    .selectAll("a-box")
    .data(dataset)
    .enter()
    .append("a-box");
};

initialRender();

////// Change parameters
const render = dataset => {
  d3.select("a-scene")
    .selectAll("a-box")
    .data(dataset)
    .attrs({
      color: "crimson",
      rotation: "0 0 0",
      depth: size,
      height: d => validateInt(d) / 12,
      width: size,
      position: (d, i) => {
        const x = offset + i / 4;
        const y = validateInt(d) / 24;
        const z = -3;
        return x + " " + y + " " + z;
      }
    });
};

////// Start animation getting data via HTTP
// let pulse = setTimeout(function tick() {
//   fetch(url)
//     .then(res => res.json())
//     .then(dataset => {
//       console.log(dataset);
//       render(dataset);
//     });

//   pulse = setTimeout(tick, delay);
// }, delay);

////// Start animation getting data via WebSocet
const mySocket = new WebSocket("ws://localhost:3001");
mySocket.onmessage = event => {
  const dataset = JSON.parse(event.data);
  console.log(dataset);
  render(dataset);
};

mySocket.onerror = error => {
  console.log(error);
};
