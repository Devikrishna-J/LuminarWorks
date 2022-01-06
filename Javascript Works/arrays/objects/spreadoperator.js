//spread operators accept 'n' number of elements/parameters as array of elements
//(...args) or (...nums)
//Qn1 function for add n number of elements
let addnum=(...args)=>args.reduce((n1,n2)=>n1+n2)
console.log(addnum(10,20));

//Qn2 function to find maximum value from n number of elements
let findMax=(...param)=>param.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(findMax(50,20,30,10,70));