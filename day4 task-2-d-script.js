//d-Return all the prime numbers in an array
//ARROW FUNCTION
let arr=[2,3,4,6,11,13,17,20,10],prime='';
let primeNumber=(arr)=>{
  
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