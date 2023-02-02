// ===========================================
// form JavaScript
// ===========================================

// Email validation //

// Variables

const email = document.querySelector('.email');
const submit = document.querySelector('.submit-btn');
const emailInput = document.querySelector('.email-input');
const errorMessage = document.querySelector(".error-message");
const inputEmails = document.querySelector(".inputted-emails");

var errorCount = 0;


// Functions

function isEmail(email){
    return /(?:[a-z0-9!#$%&'*+\=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/.test(email);
    
}

function checkInputs() {
    if(email.value != undefined && email.value === '') {
        emailInput.classList.add('error');
        errorMessage.innerHTML= 'Email cannot be blank';
        errorCount++;
    } else if (!isEmail(email.value)) {
        emailInput.classList.add('error');
        errorMessage.innerHTML= 'This is not a valid email';
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

// drop down menu functions
const dropBtn = document.querySelector('.drop-btn');
const dropContent = document.querySelector('.dropdwn-content');

// // function to open drop down
// function openDropDown() {
//     dropContent.style.visibility = ('visible');
// }

// //function to close dropdown
// function closeDropDown() {
//     dropContent.style.visibility = ('hidden');
// }

// // event listener for click on dropdown button to call either to close or open menu
// dropBtn.addEventListener('click', function(){
//     if (dropContent.style.visibility === 'visible') {
//         closeDropDown();
//     } else {
//         openDropDown();
//     }
// })

//function to display the emails into the dropdown
//// The email are looped through to display into dropdown content
function showEmails(dropContent) {

    // first empty the content
    $(dropContent).empty();

    // loop through the emails in the array and append a span into the content container
    $.each(emailsWithImages, function(i, images){
        $(dropContent).append("<option value='" + email + "' class='email'>" + i +"</option>");
    });
}

// var e = document.getElementById("ddlViewBy");
// var value = e.value;
// var text = e.options[e.selectedIndex].text;

$(document).on("change", ".emailSelection", function() {
	// $(this) gets the input element that the .change is referring to
	changeEmail($(this));
});

function changeEmail(emailSelect) {	
	// gets you the value thats been selected in the 
	var selectedEmail = emailSelect.find(":selected").val();
    console.log(selectedEmail);
	$(".email").val(selectedEmail).change();
}