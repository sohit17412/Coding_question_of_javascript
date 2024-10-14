const ob1 = {
  fullname: function () {
    // important :-- when ever you use arrow funtion you cant access the this keyword.
    console.log(`Developer name is ${this.first} ${this.last}`);
  },
};

const ob2 = {
  first: "Prashant",
  last: "verma",
};

ob1.fullname.apply(ob2);

/***********argumented */

const describe = {
  fun: function (city, job) {
    console.log(
      `${this.first} ${this.last} lives in ${city} and he is a ${job}`
    );
  },
};

describe.fun.apply(ob2, ["Lucknow", "Software developer"]);

/**same works with the call function the only differnce is it takes arguments in simple for example ;;-- describe.fun.call(ob2,'Lucknow','software developer') */
