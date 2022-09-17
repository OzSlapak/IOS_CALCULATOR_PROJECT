const input = document.querySelector('.input');
const result = document.querySelector('.result');
const buttons = document.querySelector('.buttons');
let oper = '';
let initialNumber = '';

buttons.addEventListener ('click',(e) => {
    let initialValue = result.innerHTML;
    let buttonValue = e.target.innerHTML;
    
    if(e.target.classList.contains('num')){
        if(initialValue  === '0' && buttonValue === '0'){
            console.log('No action');
        }else if(initialValue === '0'){
            initialValue.innerHTML = buttonValue;
        }else {
            initialValue.innerHTML += buttonValue;
        }
    }
    if (e.target.classList.contains('oper')) {
        oper = buttonValue;
        initialNumber = initialValue;
        result.innerHTML= `${initialNumber}${oper}`;
        input.innerHTML = '0';
        console.log(initialNumber);
    }
    if (e.target.classList.contains('equals')) {
        switch(oper) {
            case '+' :
                input.innerHTML = 
                Num(initialNumber) + Num (input.innerHTML);
                result.innerHTML = '';
                break;
            case '-':
                input.innerHTML = 
                Num(initialNumber) - Num (input.innerHTML);
                result.innerHTML = '';
                break;
            case 'x ':
                input.innerHTML = 
                Num(initialNumber) * Num (input.innerHTML);
                result.innerHTML = '';
                break;
            case '÷':
                input.innerHTML = 
                Num(initialNumber) / Num (input.innerHTML);
                result.innerHTML = '';
                break;
        }
    }
})
