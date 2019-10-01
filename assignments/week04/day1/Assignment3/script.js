var input;
var stack=[];
var push;
var pop;
push=document.getElementById("push");
pop=document.getElementById("pop");
push.addEventListener('click',function(){

    input=document.getElementById("space").value;
    if(input!=null)
    {
        stack.push(input);    
    }
    else{
        alert("Empty Column");
    }
    document.getElementById("Elem").innerHTML=stack;
    
});
pop.addEventListener('click',function(){
    stack.pop();
    document.getElementById("Elem").innerHTML=stack;
})