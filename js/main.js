// ===========================================
// form JavaScript
// ===========================================

// Email validation //

// Variables

const email = document.querySelector('.email');
// const emailValue = email.value;
const submit = document.querySelector('.email-submit_btn');
const selectImg = document.querySelector('.submit-btn');

var errorCount = 0;


// Functions

function isEmail(email){
    return /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/.test(email);

}


function checkInputs() {
    console.log(email.value);
    if(email.value != undefined && email.value === '') {
        console.log('email cannot be blank');
        errorCount++;
    } else if (!isEmail(email.value)) {
        console.log('this is not a valid email');
        errorCount++;
    } else {
        console.log('success');
        addEmail();
        errorCount = 0;
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
        console.log('success');
    }
})


function checkBeforeAdd() {
    if(checkInputs()) {
        addImg();
    } else {
        console.log('Please add an email before choosing an image');
    }
}

selectImg.addEventListener('click', function() {
    checkBeforeAdd();
})