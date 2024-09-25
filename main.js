
// Constant Variables

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

const products = [
        {
          title: "AstroFiction",
          author: "John Doe",
          price: 49.9,
          image: "./assets/products/img6.png"
        },
        {
          title: "Space Odissey",
          author: "Marie Anne",
          price: 35,
          image: "./assets/products/img1.png"
        },
        {
          title: "Doomed City",
          author: "Jason Cobert",
          price: 0,
          image: "./assets/products/img2.png"
        },
        {
          title: "Black Dog",
          author: "John Doe",
          price: 85.35,
          image: "./assets/products/img3.png"
        },
        {
          title: "My Little Robot",
          author: "Pedro Paulo",
          price: 0,
          image: "./assets/products/img5.png"
        },
        {
          title: "Garden Girl",
          author: "Ankit Patel",
          price: 45,
          image: "./assets/products/img4.png"
        }
]

//Menu Section 
function menuHandler(buttonId) {
    document.querySelector(buttonId).addEventListener('click', 
function(){
    document.querySelector('header nav .wrapper').classList.toggle('nav-open');
});
}
//Temperature
function celsiusToFahr (temperature) {
    return (temperature * (9/5)) + 32;
 }

 //Greeting Section
function greetingHandler(){

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

}

// Can set the time in which something repeats
//setTimeout only repeats once

//Clock Section
function clockHandler(){

setInterval(function(){
    let localTime = new Date();

    document.querySelector("span[data-time=hours]").textContent = localTime.getHours();
    document.querySelector("span[data-time=minutes]").textContent = (localTime.getMinutes()).toString().padStart(2, "0");
    document.querySelector("span[data-time=seconds]").textContent = (localTime.getSeconds()).toString().padStart(2, "0");
    // Padded start we want string length 2 and then pad with 0 in front if not length 2
},1000);
// In Milliseconds 
}

//Gallery Section
function galleryHandler(){

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
        (thumb.dataset.selected = index === 0? true : false);

        thumb.addEventListener("click", function(event) {
            let selectedImageIndex = event.target.dataset.arrayIndex;
            mainImage.src = galleryImages[selectedImageIndex].src;
            mainImage.alt = galleryImages[selectedImageIndex].alt;
    

        thumbnails.querySelectorAll("img").forEach(function(img) {
            img.dataset.selected = false;
        }) 

        event.target.dataset.selected = true;
    })
        thumbnails.appendChild(thumb);
    });

}

function populateProducts(productList) {

    let productsSection = document.querySelector(".products-area");
    productsSection.textContent = "";

    // Run a loop through the products and create an HTML element ("product-item") for each of them
    productList.forEach(function(product, index) {
        
        //create the HTMl element for the individual product
        let productElem = document.createElement("div");
        productElem.classList.add("product-item");

        //create the product image
        let productImg = document.createElement("img");
        productImg.src = product.image;
        productImg.alt = "Image for" + product.title;
        
        let productDetails = document.createElement("div");
        productDetails.classList.add("product-details");
        
        let productTitle = document.createElement("h3");
        productTitle.classList.add("product-title");
        productTitle.textContent = product.title;

        let productAuthor = document.createElement("p");
        productAuthor.classList.add("product-author");
        productAuthor.innerText = product.author;

        let priceTitle = document.createElement("p");
        priceTitle.classList.add("price-title");
        priceTitle.innerText = "Price";

        let price = document.createElement("p");
        price.classList.add("product-price");
        price.innerText = (product.price > 0 ? "$" + product.price.toFixed(2): "Free");
        
        //Add all child HTMl elements of the product

        productDetails.append(productTitle);
        productDetails.append(productAuthor);
        productDetails.append(priceTitle);
        productDetails.append(price);

        productElem.append(productImg);

        productElem.append(productDetails);
        productsSection.append(productElem);
        
    });

}

function productsHandler() {



    let freeProducts = products.filter(function(item){
        return item.price <= 0 || !item.price || item.price === undefined;
    });

    let paidProducts = products.filter(function(item){
        return item.price > 0;
    });

    populateProducts(products);

   
    document.querySelector(".products-filter label[for=all] span.product-amount").textContent = products.length;
    document.querySelector(".products-filter label[for=paid] span.product-amount").textContent = paidProducts.length;
    document.querySelector(".products-filter label[for=free] span.product-amount").textContent = freeProducts.length;


    document.querySelector(".products-filter").addEventListener("click", function(event) {
      if(event.target.id == "all") {

        populateProducts(products);
      } else if (event.target.id == "paid"){
        populateProducts(paidProducts);
      } else if (event.target.id == "free") {
        populateProducts(freeProducts);
      }
    });


}

function footHandler() {
    let currentYear = new Date().getFullYear();
    document.querySelector("footer").textContent = ` © ${currentYear} - All rights reserved`;
}


//page load

menuHandler('button#open-nav-menu');
menuHandler('button#close-nav-menu');
greetingHandler();
clockHandler();
galleryHandler();
productsHandler();
footHandler();
