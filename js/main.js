const display =document.querySelector('.calculater-input');
const keys=document.querySelector('.calculater-keys');

let displayValue='0';
let firstValue=null;
let operator =null;
let vFSV =false;

updateDisplay();

function updateDisplay(){
    display.value = displayValue;
}

keys.addEventListener('click',function(e){
    const element =e.target;

    if(!element.matches('button')) return ;

    if(element.classList.contains('operator')){
        handleOperator(element.value);
        updateDisplay();
        return;
    }
    if(element.classList.contains('decimal')){
        inputDecimal();
        updateDisplay();
        return;
    }
    if(element.classList.contains('clear')){
        clear();
        updateDisplay();
        return;
    }

    //console.log('number',element.value);

    inputNumber(element.value);
    updateDisplay();

})


function handleOperator(nextOperator){

    const value =parseFloat(displayValue);

    if(operator&&vFSV){
        operator=nextOperator;
        return;
    }
    if(firstValue===null){
       firstValue =displayValue;  
    }else if(operator){
        const result =calculate(firstValue,value,operator);
        displayValue=`${parseFloat(result.toFixed(7))}`;
        firstValue=result;
    }

    vFSV=true; 
    operator=nextOperator;
}


function calculate(first,second,operator){

    if(operator==='+'){
        return first+second;
    }else if(operator==='-'){
        return first-second;
    }
    else if(operator==='*'){
        return first*second;
    }
    else if(operator==='/'){
        return first/second;
    }

    return second;

}

function inputNumber(number){

    if(vFSV){
        displayValue=number;
        vFSV=false;
    }else{
        displayValue=displayValue==='0'? number:displayValue +number;
    }

    

}

function inputDecimal(){
    if(!displayValue.includes('.')){
        displayValue+='.';
    }
}

function clear(){
    displayValue='0';
}