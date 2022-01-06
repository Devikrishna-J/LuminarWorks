var num=7;
var flag=0,i=0;

for(i=2;i<num;i++)
{
    if(num%i==0)
    {
        flag=1;
        break;
    }
}
if(flag==0)
    console.log("Number is prime");
else
    console.log("Number is not prime");