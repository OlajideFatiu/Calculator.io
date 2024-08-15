// CALCULATOR PROGRAM

const display = document.getElementById("display");
const symbols = ["+","-","/","*","."]
function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = ""; 
}

function calculate(){
    try{
    display.value = eval(display.value);
        }
    catch{
    display.value = "Error";
    }
}
function darkMode(){
    document.body.style.backgroundColor = "hsl(0, 0%, 5%";
    document.getElementById("calculator").style.boxShadow= "5px 5px 15px hsl(0, 0%, 100%)";
}

function lightMode(){
    document.body.style.backgroundColor = "hsl(0, 0%, 95%)";
    document.getElementById("calculator").style.boxShadow= "5px 5px 15px hsla(0, 0%, 0%, 0.5)";
}
function checkSymbol(event){
    for(symbol in symbols){
        if(event.key === symbols[symbol]){
            appendToDisplay(event.key)
           } 
        if(event.key === "="){
            calculate()
           } 
        if(event.key === "c"){
            clearDisplay()
           } 
        if(event.key === "Enter"){
            calculate()
           } 
        
        }
}
const inputValue=(event)=>{
    if(isNaN(event.key)){
        checkSymbol(event)
        }
    else{
    appendToDisplay(event.key)
        }
    }
document.addEventListener("keydown",(event)=>{inputValue(event)})




