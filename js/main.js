// ===========================================
// form JavaScript
// ===========================================

// Email validation //

// Variables

const email = document.querySelector('.email');
const emailValue = email.value;
const submit = document.querySelector('.submit-btn');

var errorCount = 0;


// Functions

function isEmail(email){
    return /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/.test(email);

}

submit.addEventListener('click', (e) => {
    var test = checkInputs();
    if (!test) {
        e.preventDefault();
    } else {
        console.log('success');
    }
})

function checkInputs() {
    if(emailValue != undefined && emailValue === '') {
        console.log('email cannot be blank');
        errorCount++;
    } else if (!isEmail(emailValue)) {
        console.log('this is not a valid email');
        errorCount++;
    } else {
        console.log('success')
    }

    if(errorCount !=0) {
        return false;
    } else {
        return true;
    }
}