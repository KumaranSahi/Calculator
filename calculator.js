var results=document.getElementById("results");
var buttons=document.getElementsByClassName("button");

var op1=null;
var op2=null;
var opr=null;
var res=null;

function isOperator(value) {
    return value == "+" || value == "-" || value == "*" || value == "/";
}


for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        var value=this.getAttribute('data-value');
        if(!(isNaN(value))){
            results.innerText+=value;
        }
        else if(isOperator(value)){
            op1=parseFloat(results.textContent.trim());
            results.textContent="";
            opr=value;
        }
        else if(value=="="){
            op2=parseFloat(results.textContent.trim());
            res=eval(op1+''+opr+' '+op2);
            if(!isNaN(res)){
                results.textContent=res;
            }
            op1=null;
            op2=null;
            opr=null;
        }
        else if(value=="ac"){
            results.textContent="";
        }
        else if(value=="+/-"){
            results.textContent=-1*parseFloat(results.textContent.trim());
        }
        else if(value=="%"){
            results.textContent=parseFloat(results.textContent.trim())/100;
        }
        else if (value == ".") {
            if (results.textContent.trim().length && !results.textContent.trim().includes('.')) {
                results.textContent = results.textContent.trim() + '.';
            }
        } 
    });
}

