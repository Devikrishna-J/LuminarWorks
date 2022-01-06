var num1=20;
var num2=20;
var num3=10;

if(num1>num2 && num1>num3 ){   
   if(num2>num3){
    console.log("second largest num is"+num2);
   }
   else
   console.log("second largest num is"+num3);
}
else if(num2>num1 && num2>num3){
    if(num1>num3){
        console.log("second largest num is"+num1);
    }
    else
        console.log("second largest num is"+num3);
}
else if(num3>num1 && num3>num2){
    
    if(num2>num1){
        console.log("second largest num is"+num2);
    }
    else
    console.log("second largest num is"+num1);

}
else{
    console.log("all numbers are equal");
}