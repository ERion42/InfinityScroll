// Unsplash API
const count = 10;
const apiKey = '3Uwpfhq4t6aGYPyuZ5OLHuoXGPt3EUKUky8KLQiN9iE'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // catch error

    }
}

// On load
getPhotos();