var num1=15;
var num2=5;
var num3=10;

if(num1>num2 && num1>num3 ){   
   if(num2>num3){
    //console.log("second largest num is"+num2);
    console.log(`${num1}${num2}${num3}`);
   }
   else{
    //console.log("second largest num is"+num3);
    console.log(`${num1}${num3}${num2}`);
   }   
}
else if(num2>num1 && num2>num3){
    if(num1>num3){
       // console.log("second largest num is"+num1);
        console.log(`${num2}${num1}${num3}`);
    }
    else{
        //console.log("second largest num is"+num3);
        console.log(`${num2}${num3}${num1}`);
    }       
}
else if(num3>num1 && num3>num2){
    
    if(num2>num1){
       // console.log("second largest num is"+num2);
        console.log(`${num3}${num2}${num1}`);
    }
    else{
       // console.log("second largest num is"+num1);
        console.log(`${num3}${num1}${num2}`);
    }   
}
else{
    console.log("all numbers are equal");
}