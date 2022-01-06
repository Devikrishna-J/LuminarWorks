//Binary Search
var arr=[2,4,3,7,5,8,10,6,12];
arr.sort((n1,n2)=>n1-n2);
var low=0,upp=arr.length-1;
var flag=0;
var element=12;
while(low<=upp){
    mid=Math.floor((low+upp)/2);
    if(element==arr[mid]){
        flag=1;
        var pos=mid;    //index position of number found 
        break;
    }
    else if(element<arr[mid]){
        upp=mid-1;
    }
    else if(element>arr[mid]){
        low=mid+1;
    }
}
console.log(flag==0?"Number Not found":"Number Found at position",pos);
