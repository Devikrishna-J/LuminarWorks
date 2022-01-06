var num=2;
var low=8,up=30;
var i;

for(i=1;i<=up;i++)
{
    let range= i**num;
    if(range>=low && range<=up)
    {
        console.log(i);
    }
}