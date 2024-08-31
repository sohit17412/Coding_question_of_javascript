let num=15;
let res;
if(num<=1){ 
    console.log(`${num} is not a prime number`);
}else{
  for(i=2;i<num;i++)
  {
    if(num%i==0)
    {
       res=`${num} is not a prime number`;
      break;
    }else{
       res=`${num} is a prime number`;
      

    }
  }
  console.log(res);
}