//Rotate an array by k times
//ANONYMOUS
let arr=[1,2,3,4,5],k=2,temp;
let arrayRotation=function(){
  for(let i=0;i<k;i++){
let j=arr.length-1
temp=arr[j]
while(j>0){
    arr[j]=arr[j-1]
    j=j-1;
    }
    arr[j]=temp
  }
  console.log(arr)
}
arrayRotation(arr)

//IIFE FUNCTIONS
//Rotate an array by k times
let array=[1,2,3,4,5],k=2,temp1;
(function arrayRotation(array){
  for(let i=0;i<k;i++){
let j=array.length-1
temp1=array[j]
while(j>0){
    array[j]=array[j-1]
    j=j-1;
    }
    array[j]=temp1
  }
  console.log(array)
})(array)