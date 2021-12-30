const form = document.forms[0];
const inputs = [...form];
const submitBtn = document.querySelector('button');
const error = document.querySelector('.error');

function checkForm() {
    let errorMessage = [];
    
    for(let i = 0; i < inputs.length - 1; i++) {
        let currentInput = inputs[i];
        if(currentInput.validity.valueMissing) {
            errorMessage += `${currentInput.name} field is missing\n`;
        }
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



