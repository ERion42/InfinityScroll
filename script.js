const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = '3Uwpfhq4t6aGYPyuZ5OLHuoXGPt3EUKUky8KLQiN9iE'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Create elements for links and photos, add to DOM
function displayPhotos() {
    // run function for each object in photosArray
    photosArray.forEach((photo) => {
        // Create anchor element to link to unsplash
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        // create image for photo
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);
        // put image inside anchor element, both inside imageContainer element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}


// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        // catch error
    }
}

// On load
getPhotos();