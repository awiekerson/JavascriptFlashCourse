

// Navigation bar open and close

function navigationBarToggle(buttonId) {
    document.querySelector(buttonId).addEventListener('click', 
function(){
    document.querySelector('header nav .wrapper').classList.toggle('nav-open');
});
}

navigationBarToggle('button#open-nav-menu');
navigationBarToggle('button#close-nav-menu');

//Greeting section + weather

function celsiusToFahr (temperature) {
    return (temperature * (9/5)) + 32;
 }

const currentHour = new Date().getHours();
let greetingText;
const weatherCondition = "sunny";
const userLocation = "Seattle";
let temperature = 30;
let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)}°C outside.`;
let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(temperature).toFixed(1)}°F outside.`;


if (currentHour < 12) {
     greetingText = "Good Morning!"
} else if (currentHour < 18){
     greetingText = "Good Afternoon!"
} else if (currentHour < 24){
     greetingText = "Good Evening!"
} else {
    greetingText = "Welcome!";
}
document.querySelector('#greeting').innerHTML = greetingText; 
document.querySelector('#weather').innerHTML = celsiusText; 


document.querySelector('div.weather-group').addEventListener('click', function(event){
    
   if (event.target.id == 'fahr'){
        document.querySelector('#weather').innerHTML = fahrText;  
   }
   if (event.target.id == 'celsius'){
        document.querySelector('#weather').innerHTML = celsiusText;
   }
   
});

// Can set the time in which something repeats
//setTimeout only repeats once

setInterval(function(){
    let localTime = new Date();

    document.querySelector("span[data-time=hours]").textContent = localTime.getHours();
    document.querySelector("span[data-time=minutes]").textContent = (localTime.getMinutes()).toString().padStart(2, "0");
    document.querySelector("span[data-time=seconds]").textContent = (localTime.getSeconds()).toString().padStart(2, "0");
    // Padded start we want string length 2 and then pad with 0 in front if not length 2
},1000);
// In Milliseconds 

// Gallery Section 

const galleryImages = [
    
    
    {
        src : "./assets/gallery/image2.jpg", 
        alt : "Thumbnail Image 1"
    },
    {
        src : "./assets/gallery/image1.jpg",
        alt : "Thumbnail Image 2"
    },
    {
        src : "./assets/gallery/image3.jpg",
        alt : "Thumbnail Image 3"
    },
    {
        src : "./assets/gallery/img1.png",
        alt : "Thumbnail Image 4"
    },
    
];

// Have one image selected by default
let mainImage = document.querySelector("#gallery > img");
let thumbnails = document.querySelector("#gallery .thumbnails");

mainImage.src = galleryImages[0].src;  
mainImage.alt = galleryImages[0].alt;  

// dynamically adding the photo attributes from image gallery and adding extra attributes
// Just need to add images in array for them to show up 
galleryImages.forEach(function(image, index) {
    let thumb = document.createElement("img");
    thumb.src = image.src;
    thumb.alt = image.alt;
    thumb.dataset.arrayIndex = index;
    (thumb.dataset.selected = index === 0? true: false)

    thumb.addEventListener("click", function(event){
        let selectedImageIndex = event.target.dataset.arrayIndex;
        mainImage.src = galleryImages[selectedImageIndex].src;  
        mainImage.alt = galleryImages[selectedImageIndex].alt; 

        thumbnails.querySelectorAll("img").forEach(function(img){
            img.dataset.selected = false;
        });

        event.target.dataset.selected = true;
    });

    thumbnails.appendChild(thumb);
}); 