const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
offset = -1;
size = 0.15;

const scene = d3
  .select(".container")
  .append("a-scene")
  .selectAll("a-box")
  .data(dataset)
  .enter()
  .append("a-box")

  .attrs({
    color: "crimson",
    rotation: "0 0 0",
    depth: size,
    height: d => d / 12,
    width: size,
    position: (d, i) => {
      const x = offset + i / 4;
      const y = d / 24;
      const z = -3;
      return x + " " + y + " " + z;
    }
  });

// .attr("color", "crimson")
// .attr("rotation", "0 0 0")
// .attr("depth", size.toString())
// .attr("height", d => d / 12)
// .attr("width", size.toString())
// .attr("position", (d, i) => `${offset + i / 4} ${d / 24} ${-3}`);

// const scene = d3
//   .select(".container")
//   .append("a-scene")
//   .append("a-box")
//   .attrs({
//     color: "crimson",
//     scale: ".3 1 .3",
//     position: "0 1 -2",
//     rotation: "0 30 0"
//   });
// .attr("color", "crimson")
// .attr("scale", ".3 1 .3")
// .attr("position", "0 1 -2")
// .attr("rotation", "0 30 0");
