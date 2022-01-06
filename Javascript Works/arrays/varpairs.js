var arr=[2,3,4,5]; //array shud be sorted -ascending order   
var sum=8;
var low=0,upp=arr.length-1;
var flag=0;
while(low<upp){
    let cur_sum=arr[low]+arr[upp];
    //case 1
    if(cur_sum==sum){
        console.log(`pair:(${arr[low]},${arr[upp]})`);
        flag=1;   
        break;
    }
    else if(cur_sum<sum){
        low++;
    }
    else if(cur_sum>sum){
        upp--;
    }
}
if(flag==0)
    console.log("no pair found");