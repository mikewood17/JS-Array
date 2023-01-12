// ===========================================================
// App,js
// ===========================================================



// Variables

let imgContainer = document.querySelector('.img-container');
let imgUrl;
const refresh = document.querySelector('.refresh-btn');
const selectImg = document.querySelector('.submit-btn');
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
    selectedImage.push(email.value);
    emailContainer.innerHTML = `<h3>${email.value}<h3>`;
}

function addImg(){
    selectedImage.push(imgUrl);
    savedImgContainer.innerHTML = `<img src='${imgUrl}' alt='random img'>`;
    var imgElements= "";
    selectedImage.forEach(url => imgElements += `<img src='${url}' alt='random img'>`);
    savedImgContainer.innerHTML = imgElements;
}

// for(i=0, i<selectedImage.length, i++) {
//     if(i = odd) {
//     <img src = [i]>
//     }
//     }

