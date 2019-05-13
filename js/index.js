const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent.cta["img-src"]);

let midImg = document.getElementById("middle-img");
midImg.src = siteContent["main-content"]["middle-img-src"];

let navItems = document.querySelectorAll('header nav a');
navItems.forEach((item, index) => {
  let tempKey =`nav-item-${index + 1}`;
  item.textContent = siteContent.nav[tempKey];      // From Brandon, good idea
  item.style.color = "green";
})


let h1Text = document.querySelector('h1');
h1Text.textContent = siteContent.cta["h1"];

let btnTxt = document.querySelector('button');
btnTxt.textContent = siteContent.cta["button"];

let h4Arr = document.querySelectorAll('.text-content h4');
h4Arr[0].textContent = "Features";
h4Arr[1].textContent = "About";
h4Arr[2].textContent = "Services";
h4Arr[3].textContent = "Product";
h4Arr[4].textContent = "Vision";

let mainP = document.querySelectorAll('.main-content p');
mainP[0].textContent = siteContent["main-content"]["features-content"];
mainP[1].textContent = siteContent["main-content"]["about-content"];
mainP[2].textContent = siteContent["main-content"]["services-content"];
mainP[3].textContent = siteContent["main-content"]["product-content"];
mainP[4].textContent = siteContent["main-content"]["vision-content"];

document.querySelector(".contact h4").textContent = siteContent.contact["contact-h4"];
let contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = siteContent.contact["address"];
contactP[1].textContent = siteContent.contact["phone"];
contactP[2].textContent = siteContent.contact["email"];

document.querySelector('footer p').textContent = siteContent.footer["copyright"];



