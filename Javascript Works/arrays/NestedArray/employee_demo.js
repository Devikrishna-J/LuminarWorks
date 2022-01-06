var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",7000,"developer",2000,2010],
    [1003,"nikil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]
//q1 print all emp names
/*for(let emp of employees){
}*/
//q6 : second highest salary
/*employees.sort((e1,e2)=>e2[2]-e1[2]);
console.log(employees[1][2]);*/
//q9: highest among developers
/*var emp_developer=[];
for(let emp of employees)
{
    if(emp[3]=="developer"){
        emp_developer.push(emp);
    }
}
//console.log(emp_developer);
emp_developer.sort((d1,d2)=>d2[2]-d1[2]);
console.log(emp_developer[0][2]);*/
