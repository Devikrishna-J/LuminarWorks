var arr=[10,11,12,15,16]
var element=150,flag=0;
//Linear Search
for(let num of arr){
    if(num==element){
        flag=1;
        break;
        
    }
}
console.log(flag==0?"Number not found":"Number found");