let arr=['prashant',5,8,'sohit','akash',10,'fusho',24];
let sum=0;
arr.forEach((item)=>{

  if(typeof item==='number')
  {
    sum=sum+item;
  }
})

console.log(sum);//{47}