var coivd_data=[
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,7,3],
    [3,"kottayam",50000,500,45000,5,2],
    [4,"alapuzha",25000,150,24000,9,5],
    [5,"ernamkulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"iduky",1000,50,9500,9,6]   
]

// q1 higest test + ve case district
var testPost=coivd_data.reduce((p1,p2)=>p1[2]>p2[2]?p1:p2);
//console.log(testPost);

// q2 district with higest 1 dose vaccination rate
var highFirstDose=coivd_data.reduce((f1,f2)=>f1[5]>f2[5]?f1:f2);
//console.log(highFirstDose);
var distFirstDose=coivd_data.filter(d1=>d1[5]==highFirstDose[5],0);
//console.log(distFirstDose);

// q3 district with lowest death cases
var lowDeath=coivd_data.reduce((d1,d2)=>d1[3]<d2[3]?d1:d2);
//console.log(lowDeath);

// q4 sort district with +ve cases
var sortDistrict=coivd_data.sort((d1,d2)=>d2[2]-d1[2]);
//console.log(sortDistrict);

// q5 sort the districts based on 1st dose
var sortDistFirstDose=coivd_data.sort((d1,d2)=>d2[5]-d1[5]);
//console.log(sortDistFirstDose);

// q6 is there any states with +ve cases > 60000
var isDistrict=coivd_data.some(d1=>d1[2]>60000);
//console.log(isDistrict);

// q7 print trissur details
var distTrissur=coivd_data.find(d1=>d1[1]=="thrissur");
//console.log(distTrissur);

// q8 total number of +ve cases
var totalPostvCases=coivd_data.reduce((d1,d2)=>d1+d2[2],0);
//console.log(totalPostvCases);

// q9 total number of cured cases
var totalCured=coivd_data.reduce((d1,d2)=>d1+d2[4],0);
//console.log(totalCured);

// q10 cured numbers of iduky
var curedIduky=coivd_data.find(d1=>d1[1]=="iduky")[4];
//console.log(curedIduky);

// q11 total number of death cases
var totalDeath=coivd_data.reduce((d1,d2)=>d1+d2[3],0);
//var totalDeath=covid_data.map(dist=>dist[3])
//console.log(totalDeath);