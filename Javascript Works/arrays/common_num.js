var arr1=[10,11,20,21];
var arr2=[11,12,20,21];
var arr_com=[];
var flag=0,count=0;
var p1=0,p2=0;
console.log("Common numbers are: ");
while(p1<arr1.length && p2<arr2.length){
    if(arr1[p1]==arr2[p2]){
        console.log(`${arr1[p1]}`);
        p1++,p2++;
        flag=1;
    }
    else if(arr1[p1]>arr2[p2]){
        p2++;
    }
    else if(arr1[p1]<arr2[p2]){
        p1++;
    }
    //count++       //count iteration-loop
}
//console.log(count);
if(flag==0){
    console.log("Common numbers Not found");
}