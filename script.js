let creditCardValue = document.getElementById('creditCardInput');


function hideCreditCardVal(value) {
    if (value.length > 4) {
        let result = '';
        return value.split('').reduce((acc, cur, i) => {
            if (value.length - i > 4) {
                result += '#';
            } else {
                result += cur;
            }
            
            return result;
        }, '');
    } else {
        return value;
    }
}

document.getElementById('submitBtn').addEventListener('click', ()=>{
    document.getElementById('creditCard').innerHTML= hideCreditCardVal(creditCardValue.value)
})
