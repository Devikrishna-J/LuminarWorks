var arr=[2,4,6];
var sum= arr.reduce((n1,n2)=>n1+n2); //reduce():- total sum of an array
var arr_new=[];
for(let num of arr){
    arr_new.push(sum-num);
}
console.log(arr_new);