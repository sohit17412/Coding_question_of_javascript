// input:- hello everyone this is prashant.
// output:- Hello Everyone This Is Prashant.

function capta(str) {
  var up;
  let spl = str.split(" ");
  let final = spl.map((word) => {
    return word.charAt(0).toUpperCase() + word.substring(1);
  });
  return final.join(" ");
  
}

let string = "hello everyone this is prashant";
console.log(capta(string));//{"Hello Everyone This Is Prashant"}
