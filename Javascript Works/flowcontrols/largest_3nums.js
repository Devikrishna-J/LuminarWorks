var num1=5;
var num2=10;
var num3=10;

if(num1>num2 && num1>num3){
    console.log("largest num is"+num1);
}
else if(num2>num1 && num2>num3){
    console.log("largest num is"+num2);
}
else if(num3>num1 && num3>num2){
    
    console.log("largest num is"+num3);
}
else{
    console.log("all numbers are equal");
}