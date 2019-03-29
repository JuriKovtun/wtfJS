const url1 = "http://localhost:3000/";
const url2 = "https://jsonplaceholder.typicode.com/users";

let ddos = setTimeout(function tick() {
  fetch(url1)
    .then(res => res.json())
    .then(data => console.log(data));

  ddos = setTimeout(tick, 3000);
}, 3000);
