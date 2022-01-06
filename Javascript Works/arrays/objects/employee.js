//employee is an object having keys: values, method
//eid,name etc are keys/properties and 1000,ram are their values
//getEmpSalary is method
var employee={
    eid:1000,
    name:"ram",
    salary:25000,
    desig:"developer",
    exp:2,
    getEmpSalary(){
        console.log(this.salary);
    }
  
}
//console.log(employee.name);
//employee.experience=5; //add a property to object employee
//console.log(employee);
//employee.getEmpSalary();
if("exp" in employee){  //'in' is used to check wheher a property is existin an object
    employee.exp+=1;
}
else{
    employee.exp=1;
}
console.log(employee);