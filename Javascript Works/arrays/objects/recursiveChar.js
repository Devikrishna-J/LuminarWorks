var text="ABABBC"
var lc={};
var op=[];
//text.split("").map(char=>char in lc? op.push(char) : lc[char]=1)
Array.from(text).map(char=>char in lc? op.push(char) : lc[char]=1)
console.log("first recursive character is ",op[0]);

/* method 1
for(let letter of text){
    if(letter in lc){       
       console.log("first recursive character is ",letter);
       break;
    }
    else{
        lc[letter]=1;
    }
}*/
