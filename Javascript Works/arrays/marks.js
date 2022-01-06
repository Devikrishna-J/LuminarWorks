var marks=[10,7,4,6,9,3,8];
var marks_new=[];

for(let num of marks)
{
    if(num>5)
        marks_new.push(num+1);    
    else
        marks_new.push(num-1);    
}
console.log(marks_new);