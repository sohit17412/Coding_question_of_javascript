function typ(arr) {
  let newarr = [];
  arr.forEach((item) => {
    let tp = typeof item;
    if (
      tp === "object" ||
      "boolean" ||
      "function" ||
      "number" ||
      "string" ||
      "undefined"
    ) {
      newarr.push(tp);
    }
  });
  return newarr;
}

console.log(typ(["prashant", function fil() {}, 23, {}, undefined,56])); //{['string', 'function', 'number', 'object', 'undefined', 'number']}
