

var number=[2,3,4,5,6,8];
var names=["ram","anu","manu","Abhi"];
//map(): changes must reflect to each and every objects/values in an array

var num_square=number.map(num=>num**2); //square of values
//console.log(num_square);

var uppcase=names.map(name=>name.toUpperCase()); //convert names to uppercase
//console.log(uppcase);
var num_cases=number.map(num=>num>5?num+1:num-1); // if elseif :- if number>5: number+1 else number-1
//console.log(num_cases);

//filter() : changes apply to objects with any condition
var even_num=number.filter(num=>num%2==0); 
//console.log(even_num);
var name_a=names.filter(name=>name[0]=="a" || name[0]=="A");
//console.log(name_a);

//reduce()
var sum=number.reduce((n1,n2)=>n1+n2);
console.log(sum);
var max=number.reduce((n1,n2)=>n1>n2?n1:n2);
console.log(max);
var min=number.reduce((n1,n2)=>n1<n2?n1:n2);
console.log(min);