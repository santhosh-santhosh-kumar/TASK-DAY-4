//a.Print odd numbers in an array

//ANONYOMOUS FUNCTION
let arr=[1,2,3,4,6,8,23],ans=[];
let odd=function(arr){
for(var i=0;i<arr.length;i++){
    if(arr[i]%2!=0){
     ans.push(arr[i])

    }
     
}
        return ans

}
console.log(odd(arr))

//IIFE FUNCTIONS
//a.Print odd numbers in an array
let arr1=[1,2,3,4,6,8,23],ans1=[];
(function odd(arr1){
for(var i=0;i<arr1.length;i++){
    if(arr1[i]%2!=0){
     ans1.push(arr1[i])

    }
     
}
        return ans1

})(arr1)
console.log(ans1)