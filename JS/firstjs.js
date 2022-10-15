let num1=8;
let num2=2;

document.getElementById("num1").innerHTML=num1;
document.getElementById("num2").innerHTML=num2;

function add(a,e){
    let sum=num1+num2;
    document.getElementById("resalt").textContent=sum;  
}

function mult(a,b){
    let mul=num1*num2;
    document.getElementById("resalt").textContent=mul; 
}
function div(a,b){
    let div=num1/num2;
    document.getElementById("resalt").textContent=div; 
}

function subt(a,b){
    let sub=num1-num2;
    document.getElementById("resalt").textContent=sub; 
}



