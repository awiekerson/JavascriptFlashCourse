

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

const greetingTime = new Date().getHours();
const weatherCondition = "sunny";
const userLocation = "Seattle";
let temperature = 30;
let celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)}°C outside.`;
let fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${((temperature * (9/5)) + 32).toFixed(1)}°F outside.`;

document.querySelector('#weather').innerHTML = celsiusText; 

if (greetingTime < 12) {
    document.querySelector('h1#greeting').innerHTML = "Good Morning!"
} else if (greetingTime < 18){
    document.querySelector('h1#greeting').innerHTML = "Good Afternoon!"
} else {
    document.querySelector('h1#greeting').innerHTML = "Good Night!"
}

document.querySelector('div.weather-group').addEventListener('click', function(event){
    
   if (event.target.id == 'fahr'){
        document.querySelector('#weather').innerHTML = fahrText;  
   }
   
   if (event.target.id == 'celsius'){
        document.querySelector('#weather').innerHTML = celsiusText;
   }
   
});



