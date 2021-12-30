const form = document.forms[0];
const inputs = [...form];
const submitBtn = document.querySelector('button');
const error = document.querySelector('.error');

function checkForm() {
    let errorMessage = [];
    
    for(let i = 0; i < inputs.length - 1; i++) {
        let currentInput = inputs[i];
        if(currentInput.validity.valueMissing) {
            errorMessage.push(`${currentInput.name} field is missing`);
            highlightElement(currentInput);
        }

        else if(currentInput.validity.typeMismatch) {
            errorMessage.push(`${currentInput.name} should be of type ${currentInput.type}`);
        }

        else if(currentInput.validity.rangeUnderFlow) {
            errorMessage.push(`${currentInput.name} should be greater than 0`);
        }
    }

    inputs.forEach(input => {
        if(input.validity.valid) input.classList.remove('invalid');
    })

    if(inputs[3].value != inputs[4].value) {
        errorMessage.push('Password and confirmation should be the same');
        highlightElement(inputs[3]);
        highlightElement(inputs[4]);
    }

    if(errorMessage.length == 0) {
        error.textContent = 'Hi Five';
    } else {
        error.textContent = errorMessage;
    }
}

function highlightElement(input) {
    if(input.classList.contains('invalid')) return;
    else input.classList.add('invalid');
}

// Event Listeners
submitBtn.addEventListener('click', e => {
    e.preventDefault();
    checkForm();
});



