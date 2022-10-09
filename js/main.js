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
        console.log('operator',element.value);
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
    if(firstValue===null){
       firstValue =nextOperator;  
    }

    vFSV=true;
    operator=nextOperator;
    

}


function inputNumber(number){

    displayValue=displayValue==='0'? number:displayValue +number;

}

function inputDecimal(){
    if(!displayValue.includes('.')){
        displayValue+='.';
    }
}

function clear(){
    displayValue='0';
}