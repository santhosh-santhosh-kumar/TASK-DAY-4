//c-Sum of all numbers in an array
//ARROW FUNCTIONS
var sum=0
let sumOfArray=(arr)=>{
  for(var num in arr){
    sum+=arr[num];
  }
  return sum
}
console.log(sumOfArray([1,2,3,4,5]))