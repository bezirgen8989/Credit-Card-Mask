let creditCardValue = document.getElementById('creditCardInput');


function maskify(text) {
    if (text.length > 4) {
        let result = '';
        return text.split('').reduce((acc, cur, i) => {
            if (text.length - i > 4) {
                result += '#';
            } else {
                result += cur;
            }
            
            return result;
        }, '');
    } else {
        return text;
    }
}

document.getElementById('submitBtn').addEventListener('click', ()=>{
    document.getElementById('creditCard').innerHTML= maskify(creditCardValue.value)
})
