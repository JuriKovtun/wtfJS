const express = require("express");
// import spawnDataset from ('./myModules/spawnDataset')

const app = express();

const spawnDataset = () => {
  const getRandomInt = max => Math.floor(Math.random() * max);
  return new Array(9).fill().map(() => getRandomInt(31));
};

let dataset = spawnDataset();

////// Питання
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  console.log(`Sending ${dataset}`);
  res.send(dataset);
  console.log(`generating new dataset`);
  dataset = spawnDataset();
});

app.listen(3000, () => console.log("listening to 3000"));
