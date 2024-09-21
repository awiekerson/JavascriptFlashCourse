

// Navigation bar open and close

function navigationBarToggle(buttonId) {
    document.querySelector(buttonId).addEventListener('click', 
function(){
    document.querySelector('header nav .wrapper').classList.toggle('nav-open');
});
}

navigationBarToggle('button#open-nav-menu');
navigationBarToggle('button#close-nav-menu');