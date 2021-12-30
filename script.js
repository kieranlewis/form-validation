const form = document.forms[0];
const inputs = [...form];
const submitBtn = document.querySelector('button');
const error = document.querySelector('.error');

function checkForm() {
    let errorMessage = [];
    
    for(let i = 0; i < inputs.length - 1; i++) {
        let currentInput = inputs[i];
        if(currentInput.validity.valueMissing) {
            errorMessage.push(`${currentInput.name} field is missing\n`);
        }

        if(currentInput.validity.typeMismatch) {
            errorMessage.push(`${currentInput.name} should be of type ${currentInput.type}`);
        }

        if(currentInput.validity.rangeUnderFlow) {
            errorMessage.push(`${currentInput.name} should be greater than 0`);
        }
    }

    if(inputs[3].value != inputs[4].value) {
        errorMessage.push('Password and confirmation should be the same');
    }

    if(errorMessage.length == 0) {
        error.textContent = 'Hi Five';
    } else {
        error.textContent = errorMessage;
    }

    //Check if all inputs are valid
    /*
    if(inputs.every(input => input.validity.valid)) {
        error.textContent = 'Hi Five!!!';
    } else {
        error.textContent = 'Errors Found';
    }*/
}

// Event Listeners
submitBtn.addEventListener('click', e => {
    e.preventDefault();
    checkForm();
});



