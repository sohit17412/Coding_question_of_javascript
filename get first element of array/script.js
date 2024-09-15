function first(arr, n = 1) {
  if (n <= arr.length) {
    for (let i = 0; i < n; i++) {
      console.log(arr[i]);
    }
  } else {
    console.log(`${n} is too much`);
  }
}

first([1, 2, 3, 4, 5, 6, 7], 3);

/***retrieve from last */
function first(arr, n = 1) {
  if (n <= arr.length) {
    for (let i = 0; i < n; i++) {
      console.log(arr.length - 1 - i);
    }
  } else {
    console.log(`${n} is too much`);
  }
}

first([1, 2, 3, 4, 5, 6, 7], 3);
