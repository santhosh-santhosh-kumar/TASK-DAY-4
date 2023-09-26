//Return all the palindromes in an array
//ARROW FUNCTION
let arr=['madam','kumar','baab'];
let palindrome=(arr)=>{
  var result='';
  for(var str in arr){
   var s=arr[str].split('').reverse().join('')
   if(s==arr[str]){
     
     result+=arr[str]+' '
  }
}
return result.trim();
}
console.log(palindrome(arr))