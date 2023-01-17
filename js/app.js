// ===========================================================
// App,js
// ===========================================================



// Variables

let imgContainer = document.querySelector('.img-container');
let imgUrl;
const refresh = document.querySelector('.refresh-btn');
const savedImgContainer = document.querySelector('.stored-img');
const emailContainer = document.querySelector('.email-stored');


// functions

function generateImage() {
    fetch('https://picsum.photos/200').then( response => {
        imgUrl = response.url;
        let html = `<img src='${imgUrl}' class='current-img' alt='random img'>`;
        imgContainer.innerHTML = html;
    })
}

$(window).on('load', generateImage);

// refresh button

refresh.addEventListener('click', generateImage);

// array

const selectedImage = [];

function addEmail(){
    emailContainer.innerHTML = `<h3 class='email-inputted'>${email.value}<h3>`;
}

var imgElements= "";

// function displayImg(selectedImage){
//     imgElements = `<img src="${selectedImage[1]}" alt="random img" class="selected-image">`;
//     savedImgContainer.innerHTML = imgElements;
// }

// Your displayImg function would look like this...(changed the name cause its a bit different now)
function displayImagesForEmail(storedImages) {
	// Before looping through the images we need want to empty the container so the images don't stack up 
	$(savedImgContainer).empty();
	// Now we loop through each image passed to the function and append it to the div
	$.each(storedImages, function (i, img) {
		$(savedImgContainer).append("<img src='" + img + "' alt='random img' class='selected-image'>");
	});
}

function addImg(){  
   if( selectedImage.length == 0) {
        selectedImage.push([email.value,[imgUrl]]);
   } else {
        for(i=0; i<selectedImage.length; i++) {
                console.log(email.value, selectedImage[i][1]);
            if (email.value === selectedImage[i][0]) {
                selectedImage[i][1].push(imgUrl);
                // displayImg(selectedImage[i][1]);
                displayImagesForEmail(selectedImage[i][1]);
                console.log('if succeed');
            } else {
                selectedImage.push([email.value,[imgUrl]]);
                // displayImg(selectedImage[i][1]);
                displayImagesForEmail(selectedImage[i][1]);
                console.log('else succeed');
            }
            return;
        }
   }   
}

// Inside addImg wherever you need to display the images for an email
// displayImagesForEmail(selectedImage[i]);