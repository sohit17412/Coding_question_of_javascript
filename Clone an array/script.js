function clon(arr) {
  return [...arr]; //spread operator basically rakh ddeta hai cheezo ko.
}

console.log(clon([1, 2, 3, 4, 5, 6])); //{[1,2,3,4,5,6]}

/** another way to make a clone */

function seclon(arr) {
  let newarr = [];
  arr.forEach((item) => {
    newarr.push(item);
  });
  return newarr;
}

console.log(seclon([2, 3, 4, 5, 8]));

/**another way to clone the array by using map function (map return value ek new array me daal deta hai) */

function thiclon(arr) {
  let secarr = arr.map((item) => {
    return item;
  });

  return secarr;
}

console.log(thiclon([8, 4, 5, 6, 9]));
