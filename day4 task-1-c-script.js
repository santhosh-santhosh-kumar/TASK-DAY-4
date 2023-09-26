//c-Sum of all numbers in an array
//ANONYMOUS
var sum=0
let sumOfArray=function(arr){
  for(var num in arr){
    sum+=arr[num];
  }
  return sum
}
console.log(sumOfArray([1,2,3,4,5]))

//IIFE FUNCTIONS
(function sum(array){
    var sum=0;
    for(var n in array){
      sum+=array[n];
    }
    console.log(sum)
  })([1,2,3,4,5]);