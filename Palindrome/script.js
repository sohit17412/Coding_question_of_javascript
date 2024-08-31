let val='madam';
const pal=()=>{
  const rev=val.toString().split('').reverse().join('');
  const val1=val.toString()
  //console.log(typeof rev);
  if(rev===val1){
    console.log("its a palindrome")
  }else{
    console.log("its not a palindrome")
  }
}
pal()