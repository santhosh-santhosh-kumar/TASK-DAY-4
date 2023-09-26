//a.Print odd numbers in an array
//ARROW FUNCTION
let arr=[1,2,3,4,6,8,23],ans=[];
let odd=(arr)=>{
for(var i=0;i<arr.length;i++){
    if(arr[i]%2!=0){
     ans.push(arr[i])

    }
     
}
        return ans

}
console.log(odd(arr))