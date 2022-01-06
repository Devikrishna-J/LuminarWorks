var students=[
    [1000,"akhil","mearnstack",145,"mca"],
    [1001,"anu","mearnstack",165,"bca"],
    [1002,"nikil","django",175,"bca"],
    [1003,"vjil","django",165,"mca"],
    [1004,"tim","testing",185,"bca"],
    [1005,"jhon","testing",155,"mca"],
]
//q1 print name of students
/*for(let student of students){
    console.log(student[1]);    
    }
}*/
//q2 detailsof mearnstackstudent only
/*for(let student of students){
   // console.log(student[1]);
    if(student[2]=="mearnstack"){
        console.log(student);
    }
}*/
//q3 marks above 160    
  /*  for(let student of students){
        
         if(student[3]>=160){
             console.log(student);
         }
     }*/
//q4 name of students in django batch whose total > 168
for(let student of students){
   
     if(student[2]=="django" && student[3]>=168){
         console.log(student[1]);
     }
 }
 //q5 print highest total
 var max_total=0;
 for(let student of students){
   if(student[3]>max_total)
   {
       max_total=student[3];
   }
}
console.log(max_total);