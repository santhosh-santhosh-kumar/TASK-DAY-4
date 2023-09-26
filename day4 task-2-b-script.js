//b-Convert all the strings to title caps in a string array
//ARROW FUNCTIONS
let arr=['SANTHOSH','KUMAR'],temp=[];
let lowerCase=(arr)=>{
for(var str in arr){
  var result=arr[str].charAt(0).toLowerCase()+arr[str].slice(1)
  temp.push(result);
}
return temp;
}
console.log(lowerCase(arr));