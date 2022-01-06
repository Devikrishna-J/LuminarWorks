var text="hello hai hello hai";
var wc={}
//using array methods
text.split(" ").map(word=>word in wc?wc[word]+=1 : wc[word]=1)

/* method 1
var words=text.split(" ")//words=["hello","hai","hello","hai"]
console.log(words);

for(let word of words){
    if(word in wc){
        wc[word]+=1;
    }
    else{
        wc[word]=1;
    }
}*/
console.log(wc);