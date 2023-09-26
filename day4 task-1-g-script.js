//Remove duplicates from an array
//ANONYMOUS
let arr=[1,2,1,2,3,4,3,6,6,8,2],temp=[],result='';
let removeDublicateElements=function(arr){
  for(var i=0;i<arr.length;i++){
    let n=arr[i]
    let count=1;
    for(var j=i+1;j<=arr.length;j++){
      if(n==arr[j]){
        count++;
        temp[j]=-1
      }
    }
    if(temp[i]!=-1){
      temp[i]=count;
    }
  }
  for(var k=0;k<temp.length;k++)
  {
    if(temp[k]!=-1){
      result+=arr[k]+' '
}
}
var array=result.trim().split(' ');
for(var t=0;t<array.length;t++){
  array[t]=parseInt(array[t])
}
return array;
}
console.log(removeDublicateElements(arr))

//IIFE FUNCTION
//Remove duplicates from an array
let arr1=[1,2,1,2,3,4,3,6,6,8,2],arr2=[],result1='',array;
(function DublicateElements(arr){
  for(var i=0;i<arr1.length;i++){
    let n=arr1[i]
    let count=1;
    for(var j=i+1;j<=arr1.length;j++){
      if(n==arr1[j]){
        count++;
        arr2[j]=-1
      }
    }
    if(arr2[i]!=-1){
      arr2[i]=count;
    }
  }
  for(var k=0;k<arr2.length;k++)
  {
    if(arr2[k]!=-1){
      result1+=arr1[k]+' '
}
}
array=result1.trim().split(' ');
for(var t=0;t<array.length;t++){
  array[t]=parseInt(array[t])
}
return array;
})(arr1)
console.log(array)