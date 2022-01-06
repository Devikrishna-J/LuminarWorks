var mobiles=[
    [1000,"samsung","samsung f41",15000,"snapdragon","AMOLED","4g"],
    [1001,"samsung","samsung A51",32000,"snapdragon","AMOLED","5G"],
    [1002,"redmi","not 10 pro",19000,"snapdragon","LED","4g"],
    [1003,"redmi","mi 11 lite ",30000,"mediatek","LED","4G"],
    [1004,"apple","12 pro",72000,"snapdragon","AMOLED","4g"],
    [1005,"apple","12 pro max",100000,"snapdragon","AMOLED","5G"],
    [1006,"one plus","nord 2",29000,"snapdragon","AMOLED","4g"],
    [1007,"one plus","nord 2",15000,"mediatek","LED","4G"],
    

]
/////////////////////////map()
/*var mob_names=mobiles.map(mob=>mob[2]);
console.log(mob_names);
var mob_price=mobiles.map(mob=>mob[3]);
console.log(mob_price);*/

////////////////////////filter()
var mob_sam=mobiles.filter(mob=>mob[1]=="samsung");
var mob_sam=mobiles.filter(mob=>mob[1]=="samsung").map(mob=>mob[2]);
//console.log(mob_sam);

//var mob_below=mobiles.filter(mob=>mob[3]<25000);
var mob_below=mobiles.filter(mob=>mob[3]<25000).map(mob=>[mob[2],mob[3]]);
//console.log(mob_below);
var mob_range=mobiles.filter(mob=>mob[3]>=25000 && mob[3]<=30000);
//console.log(mob_range);
//Qn: list all 5g mobile names
var mob_5g=mobiles.filter(mob=>mob[6]=="5G" || mob[6]=="5g").map(mob=>mob[2]);
//console.log(mob_5g);
//Qn: list all 5g mobiles available under 25000
var mob_5g=mobiles.filter(mob=>mob[6]=="5G" && mob[3]<=25000);
/*if(mob_5g.length<=0)
   console.log("Mobile not available");    
else
    console.log(mob_5g);*/
// list all samsung mobile names whose band=4g and display type AMOLED
var mob_sam=mobiles.filter(mob=>mob[1]=="samsung" && (mob[6]=="4g" || mob[6]=="4G") && mob[5]=="AMOLED").map(mob=>mob[2]);
//console.log(mob_sam);

//reduce()
//Qn: most expensive mobile value
var mob_maxprice=mobiles.reduce((m1,m2)=>m1[3]>m2[3]?m1:m2);
//console.log(mob_maxprice);
//Qn:  lowest costly mobile value
var mob_lowcost=mobiles.reduce((m1,m2)=>m1[3]<m2[3]?m1:m2);  //here return details of mobile having lowest price from the array
//var mob_lowcost=mobiles.reduce((m1,m2)=>m1[3]<m2[3]?m1:m2)[3];
console.log(mob_lowcost);               
var lowcostly_mobiles=mobiles.filter(mob=>mob[3]==mob_lowcost); //here list all mobiles having lowest price
//console.log(lowcostly_mobiles);          

//some()
var isAvl=mobiles.some(mob=>mob[3]==10000);
//console.log(isAvl);
var isAvl=mobiles.some(mob=>mob[3]>=10000 && mob[3]<=25000);
//console.log(isAvl);

//find()
var nameById=mobiles.find(mob=>mob[0]==1000);
//console.log(nameById);



//////////nested arrays problems
//q1 costly mobile
//mobiles.sort((m1,m2)=>m2[3]-m1[3]);
//console.log(mobiles[0]);
//q2 snapdragon processor mobile
/*for(let mob of mobiles){
    if(mob[4]=="snapdragon"){
       // console.log(mob);
    }
}*/
//q3 costly mobile having processor snapdragon with 5g
/*var mobile_snap=[];
for(let mob of mobiles){
    if(mob[4]=="snapdragon" && mob[6]=="5G"){
        mobile_snap.push(mob);
       
    }
}
mobile_snap.sort((s1,s2)=>s2[3]-s1[3]);
console.log(mobile_snap[0]);*/
//q4 is there any mobile  can i purchase below 10k
/*var flag=0;
for(let mob of mobiles){
    if(mob[3]<10000){
        flag=1;
    }
}
if(flag==0){
    console.log("Not Available");
}
else{
    console.log("Available");
}
*/

//q5 print samsungA51 mobile details
/*for(let mob of mobiles){
    if(mob[2]=="samsung A51"){
        console.log(mob);
    }
}*/