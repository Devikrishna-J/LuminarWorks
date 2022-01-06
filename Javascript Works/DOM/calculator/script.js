function displayNum(num){
    display_result.value+=num;
}
function clearBox(){
    display_result.value=""
}
function evaluateExpression(){
    display_result.value=eval(display_result.value)
}
function backspaceNum(){
    display_result.value=display_result.value.slice(0,-1)
}