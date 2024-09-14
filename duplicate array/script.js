function dupl(arr)
{
  let fin=arr.concat(arr);
  return fin;
}

let final=dupl([1,2,3,4,5])
console.log(final);