function alpa(wrd) {
  return wrd.split("").sort().join("");
}

let str = "apple";
let final = alpa(str);
console.log(final); //{aelpp}
