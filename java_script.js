const imagesFolder = 'imagesfolder/';


const images = [
    'vancouver1.jpg',
    'vancouver2.jpg',
    'vancouver3.jpg',
    'vancouver4.jpg',
    'vancouver5.jpg',
];


let currentImageIndex = 0;
const totalImages = images.length;

const currentImageElement = document.getElementById('currentImage');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const currentIndexElement = document.getElementById('currentIndex');
const totalImagesElement = document.getElementById('totalImages');


function displayCurrentImage() {
  
    currentImageElement.src = imagesFolder + images[currentImageIndex];
    
    currentIndexElement.textContent = currentImageIndex + 1;
    totalImagesElement.textContent = totalImages;

    if (currentImageIndex === 0) {
        document.getElementById("message").innerText = "Steam Clock Gastown!";
    } else if (currentImageIndex === 1) {
        document.getElementById("message").innerText = "Hotel Europe at Gastown!";
    } else if (currentImageIndex === 2) {
        document.getElementById("message").innerText = "Science World at False Creek!";
    } else if (currentImageIndex === 3) {
        document.getElementById("message").innerText = "Water street with Vancouver Lookout in the middle!";
    }else {
        document.getElementById("message").innerText = "West Vancouver Lighthouse!";
    }
    
}


function nextImage() {
   
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    displayCurrentImage();
}


function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    displayCurrentImage();
}


nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);


document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        nextImage();
    } else if (event.key === 'ArrowLeft') {
        prevImage();
    }
});


function initGallery() {

    totalImagesElement.textContent = totalImages;
    
   
    displayCurrentImage();
}


window.onload = initGallery;
