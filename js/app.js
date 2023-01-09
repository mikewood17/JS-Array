// ===========================================================
// App,js
// ===========================================================

// Variables

const imgContainer = document.querySelector('.img-container');

// Fetch functions

fetch('https://picsum.photos/v2/list')
.then( response => response.json())
.then(data => generateImage(data.message))

// Helper functions

function generateImage(data) {
    const html = `<img src='${data}' alt='random img'>`;
    imgContainer.innerHTML = html;
}