const main = () => {
  const canvas = document.querySelector(".myCanvas");

  const gl = canvas.getContext("webgl");

  // Set clear color to black, fully opaque
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Clear the color buffer with specified clear color
  gl.clear(gl.COLOR_BUFFER_BIT);
};

main();

// data = [];
// data_pos = [];
// for (var i = 0; i < 20; i++) {
//   data[i] = Math.floor(Math.random() * 10 + 1);
// }

// var scene = d3.select("a-scene");
// var spheres = scene
//   .selectAll("a-sphere")
//   .data(data)
//   .enter()
//   .append("a-sphere")
//   .attr("color", "pink")
//   .attr("scale", function(d, i) {
//     return d + " " + d + " " + d;
//   })
//   .attr("position", function(d, i) {
//     var x = i * 30;
//     var y = 0;
//     var z = -300;
//     data_pos[i] = { x: x, y: y, z: z };
//     return x + " " + y + " " + z;
//   });
