const ob1 = {
  fullname: function () { // important :-- when ever you use arrow funtion you cant access the this keyword.
    console.log(`Developer name is ${this.first} ${this.last}`);
  },
};

const ob2 = {
  first: "Prashant",
  last: "verma",
};

ob1.fullname.apply(ob2);
