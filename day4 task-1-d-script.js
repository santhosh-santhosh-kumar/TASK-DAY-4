//d-Return all the prime numbers in an array
//ANONYMOUS FUNCTION
let arr=[2,3,4,6,11,13,17,20,10],prime='';
let primeNumber=function(arr){
  
  for(var num in arr){
    for(var i=2;i<arr[num];i++){
    if(arr[num]%i==0){
      break;
    }
    }
    if(i==arr[num]){
      prime+=arr[num]+' '
    }
  }
  return prime.trim()
}
  console.log(primeNumber(arr))

  //IIFE FUNCTIONS
  //Return all the prime numbers in an array
let array=[2,3,4,6,11,13,17,20,10],result='';
(function primeNumber(arr){
  
  for(var n in arr){
    for(var i=2;i<arr[n];i++){
    if(arr[n]%i==0){
      break;
    }
    }
    if(i==arr[n]){
      result+=arr[n]+' '
    }
  }
  return result.trim()
})(array)
console.log(result)