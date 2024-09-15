let arr = [
  {
    name: "prashant",
    age: 22,
    gender: "male",
  },
  {
    name: "Avika",
    age: 18,
    gender: "female",
  },
  {
    name: "Akash",
    age: 21,
    gender: "male",
  },
  {
    name: "kratika",
    age: 22,
    gender: "female",
  },
];

arr.forEach((item) => {
  if (item.gender === "male") {
    //console.log(item) // will give the answer  but it is not in array it gives two objects.
  }
});

// ** if we use filter so it automaatically stored in array.
let newarr = arr.filter((item) => {
  return item.gender === "female";
});
console.log(newarr);
