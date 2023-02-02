// ===========================================================
// App,js
// ===========================================================

// Variables

let imgContainer = document.querySelector('.img-container');
let imgUrl;
const refresh = document.querySelector('.refresh-btn');
const savedImgContainer = document.querySelector('.stored-img');
const emailContainer = document.querySelector('.email-stored');
var emailsWithImages = {};

$(window).on('load', generateImage);

// refresh button

refresh.addEventListener('click', generateImage);


// functions

function generateImage() {
    fetch('https://picsum.photos/200').then( response => {
        imgUrl = response.url;
        let html = `<img src='${imgUrl}' class='current-img' alt='random img'>`;
        imgContainer.innerHTML = html;
    })
}


function addEmail(){
    emailContainer.innerHTML = `<h3 class='email-inputted'>${email.value}<h3>`;
}

// Function that displays all of the images for a certain email.
// The array of image urls for said email are passed into the method and become the storedImages array. 
function displayImagesForEmail(storedImages) {
	// First empty the savedImgContainer so that no images for other emails remain in the box. 
	$(savedImgContainer).empty();
	
	// Loop through the storedImages array and for each one append a picture to the now empty savedImgContainer div.
	$.each(storedImages, function (i, img) {
		$(savedImgContainer).append("<img src='" + img + "' alt='random img' class='selected-image'>");
	});
}



// Function that adds the email to the emailsWithImages object. 
// email that is passed to the method is from main.js
function addImgToEmail(email) {
	// Call method to check if the email already exists in emailsWithImages and assign it to a variable. 
	var isntNewEmail = checkIfEmailExists(email);
	var isExistingImg = checkIfImageExists(email, imgUrl);
	
if (isExistingImg) {
	emailInput.classList.remove('success');
	emailInput.classList.add('error');
	errorMessage.innerHTML= 'Image has already been selected.';
	errorCount++;

	} else {
		if (isntNewEmail) {

			// If the email exists (isNewEmail == true) then we get the current emailsWithImages object 
			var currentEmailImgs = emailsWithImages[email];
			
			// Then push the new imgUrl to the array variable we just made
			currentEmailImgs.push(imgUrl);
			
			// Reassign the value of the images array in the emailsWithImages object to the new one we created (so it includes the new urls). 
			emailsWithImages[email] = currentEmailImgs;
		} else {
			// If the email doesn't exist then just create a new entry in the object. 
			// The email is the key and the value is the imgUrl in an array so we can add more to it in the future. 
			emailsWithImages[email] = [imgUrl];
		}
		console.log(selectedEmail)
		// Finally we call the function to display the images in the orange box. 
		// Passing emailsWithImages[email] to the function means we just send the array of image urls associated with the certain email.  
		displayImagesForEmail(emailsWithImages[email]);
		showEmails(dropContent);
	}
}

// Function that checks if an email is already being used inside the emailsWithImages object
function checkIfEmailExists(newEmail) {
	// Initalise a boolean set to false which will be returned at the end of the function. 
	var emailExists = false;
	
	// JQuery loop through the emailsWithImages object. The actual email key is represented by i, imgs is the imgUrls array. 
	$.each(emailsWithImages, function (i, imgs) {
		// If the email passed to the function is the same as the one in i. 
		// Set the boolean email exists to true.
		if (newEmail == i) {
			emailExists = true;
		}
	});
	// End of the function returns the emailExists variable. 
	// If there were no matches in the Jquery loop then it will remain false.
	return emailExists;
	}	


// Function that checks if an img is already being used inside the emailsWithImages object
function checkIfImageExists(email, newImg) {

// Initalise a boolean set to false which will be returned at the end of the function. 
    var imgExists = false;


    $.each(emailsWithImages[email], function (i, imgs){
        if (newImg == imgs) {
            imgExists = true;
        }
    });
    return imgExists
}