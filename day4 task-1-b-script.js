//b-Convert all the strings to title caps in a string array
//ANONYOMOUS
let arr=['SANTHOSH','KUMAR'],temp=[];
let lowerCase=function(){
for(var str in arr){
  var result=arr[str].charAt(0).toLowerCase()+arr[str].slice(1)
  temp.push(result);
}
return temp;
}
console.log(lowerCase(arr));

//IIFE FUNCTION

let array=['SANTHOSH','KUMAR'],ans=[];
(function(){
for(var str in array){
  var final=array[str].charAt(0).toLowerCase()+array[str].slice(1)
  ans.push(final);
}
return ans;
})(array)
console.log(ans);