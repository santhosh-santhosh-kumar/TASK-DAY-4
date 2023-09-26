//Return all the palindromes in an array
//ANONYMOUS
let arr=['madam','kumar','baab'];
let palindrome=function(arr){
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


//IIFE FUNCTIONS
let array=['madam','kumar','baab'];
var result='';
(function palinDrome(array){
  
  for(var string in array){
   var final=array[string].split('').reverse().join('')
   if(final==array[string]){
     
     result+=array[string]+' '
  }
}
return result.trim();
})(array)
console.log(result)