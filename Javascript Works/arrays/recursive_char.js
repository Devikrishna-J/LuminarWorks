var str="ABCAC";
var arr=[];

for(let char of str){
        
    if(arr.includes(char)){
        console.log("recursive character is ",char);
        break;
    }
    else
    {
        arr.push(char);
    }
}