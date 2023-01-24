// ===========================================
// form JavaScript
// ===========================================

// Email validation //

// Variables

const email = document.querySelector('.email');
const submit = document.querySelector('.submit-btn');
const emailInput = document.querySelector('.email-input');
const errorMessage = document.querySelector(".error-message");

var errorCount = 0;


// Functions

function isEmail(email){
    return /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/.test(email);

}

function checkInputs() {
    if(email.value != undefined && email.value === '') {
        emailInput.classList.add('error');
        errorMessage.innerHTML= 'Email Cannot Be Blank';
        errorCount++;
    } else if (!isEmail(email.value)) {
        emailInput.classList.add('error');
        errorMessage.innerHTML= 'This Is Not a Valid Email';
        errorCount++;
    } else {
        addEmail();
        errorCount = 0;
        emailInput.classList.remove('error');
        emailInput.classList.add('success');
        errorMessage.innerHTML= '';
    }

    if(errorCount !=0) {
        return false;
    } else {
        return true;
    }
}

submit.addEventListener('click', (e) => {
    var test = checkInputs();
    if (!test) {
        e.preventDefault();
    } else {
        addImgToEmail(email.value);
    }
})
