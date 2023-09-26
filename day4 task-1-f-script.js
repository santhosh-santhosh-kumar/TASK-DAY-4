//Return median of two sorted arrays of the same size.
//ANONYMOUS
let arr1=[1,2,3,48],arr2=[3,6,7,4]
let median=function(a,b){
  let c=a.concat(b)
  c=c.sort(function(a,b){return a-b})
  var length=Math.floor(c.length/2)+Math.floor((c.length/2))-1
  length=Math.floor(length/2)
  return length;
}
console.log(median(arr1,arr2))


//IIFE FUNCTION
let array1=[1,2,3,48],array2=[3,6,7,4],length1
(function median1(a,b){
  let c=a.concat(b)
  c=c.sort(function(a,b){return a-b})
  length1=Math.floor(c.length/2)+Math.floor((c.length/2))-1
  length1=Math.floor(length1/2)
  return length1;
})(array1,array2)
console.log(length1)