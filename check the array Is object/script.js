function checkArr(elem) {
  return Array.isArray(elem); // this constructor will give boolean value **{we can use typeof becouse both typeof is object so we use array constructor}//
}

console.log(checkArr({})); // checking object {false}
console.log(checkArr([])); //checking array{true}
