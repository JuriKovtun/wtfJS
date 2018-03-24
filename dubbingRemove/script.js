const arr = ["d", "a", "b", "a", "c"];
let newArr = [];

for (let i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i]);
    }
}

// console.log(newArr.sort());


const data = [{
        category: "a"
    }, {
        category: "b"
    }, {
        category: "c"
    }, {
        category: "a"
}];

const categories = [...new Set(data.map((el) => el.category))];
console.log(categories);

// omg push