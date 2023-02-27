// ===========================================
// form JavaScript
// ===========================================

// Email validation //

// Variables

const email = document.querySelector('.email');
const dropEmail = document.querySelector('.drop-email');
const submit = document.querySelector('.submit-btn');
const emailInput = document.querySelector('.email-input');
const iconContainer = document.querySelector('.icon-container');
const errMsgContainer = document.querySelector('.err-msg_container');
const errorMessage = document.querySelector(".error-message");
const inputEmails = document.querySelector(".inputted-emails");

var errorCount = 0;


// Functions

function isEmail(email){
    return /(?:[a-z0-9!#$%&'*+\=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/.test(email);
    
}

function checkInputs() {
    if(email.value != undefined && email.value === '') {
        iconContainer.classList.add('error');
        errMsgContainer.classList.add('error');
        errorMessage.innerHTML= 'Email cannot be blank';
        errorCount++;
    } else if (!isEmail(email.value)) {
        iconContainer.classList.add('error');
        errMsgContainer.classList.add('error');
        errorMessage.innerHTML= 'This is not a valid email';
        errorCount++;
    } else {
        addEmail();
        errorCount = 0;
        iconContainer.classList.remove('error');
        errMsgContainer.classList.remove('error');
        iconContainer.classList.add('success');
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

// drop down menu functions
const dropBtn = document.querySelector('.drop-btn');
const dropContent = document.querySelector('.dropdwn-content');

// function to open drop down
function openDropDown() {
    dropContent.style.visibility = ('visible');
    showEmails();
}

//function to close dropdown
function closeDropDown() {
    dropContent.style.visibility = ('hidden');
}

// event listener for click on dropdown button to call either to close or open menu
dropBtn.addEventListener('click', function(){
    if (dropContent.style.visibility === 'visible') {
        closeDropDown();
    } else {
        openDropDown();
    }
})

//function to display the emails into the dropdown
//// The email are looped through to display into dropdown content
function showEmails() {

    // first empty the content
    $(dropContent).empty();
    counter = 1;

    // loop through the emails in the array and append a span into the content container
    $.each(emailsWithImages, function(i, images){
        $(dropContent).append("<span id='d" + counter + "' class='email_container'>" + i + "</span>");
        let thismail = document.querySelector("#d" + counter);
        thismail.addEventListener("click", (e) => {
            email.value = e.currentTarget.innerText;
            closeDropDown();
        })
        counter++;
        console.log(email);
        console.log(i);
    });
}