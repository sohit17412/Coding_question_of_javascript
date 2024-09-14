var str = "saare jha se acha";

let spl = str.split(" "); // in output it gives in the the form of array so we use map for access all and saved it as a array//

const rev = spl.map(function (word) {
  // map autmatically saved all alements in the array//
  return word.split("").reverse().join("");
});

const final = rev.join(" ");
console.log(final);
