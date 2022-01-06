var num1=2;
var num2=72;
var factor=0;
var limit=0;
if(num1>num2)
{
    limit=num2;
}
else
{
    limit=num1;
}
for(let i=1;i<=limit;i++)
{
    if(num1%i==0 && num2%i==0)
    {
        factor=i;
       // console.log("HCF is",factor);
    }
}
console.log("HCF is",factor);