var expenses=[6000,2000,3000,1000,3000,5000];
//***********method 1
/*
for(let i=0;i<expenses.length;i++){
    console.log(expenses[i]);
}*/
//************method 2

/*for(let amount of expenses){
    console.log(amount);
}*/

/*********************** Q1 */
/*for(let amount of expenses){
    if(amount>2000)
        console.log(amount);
}*/
/*********************** Q2 */
/*var total_exp=0;
for(let amount of expenses){
     total_exp+=amount;
}
console.log(total_exp);*/
/********************** Q3 */
/*var max_exp=0;
for(let amount of expenses){   
    if(amount>max_exp)
        max_exp=amount;
}
console.log(max_exp);*/
/******************** Q4 */
/*var min_exp=expenses[0];
for(let amount of expenses){
    if(amount<min_exp)
        min_exp=amount;
}
console.log(min_exp);*/

/***************Q5: remove duplicates */
/****************method 1 using class Set()*/
/*var st=new Set();
for(let amount of expenses)
{
    st.add(amount);
}
console.log(st);*/

/**************method 2 using includes*/
var unique=[];
for(let amount of expenses)
{
    if(unique.includes(amount)){

    }
    else
        unique.push(amount);
}
console.log(unique);


