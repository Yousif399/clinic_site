'use strict';



/**
 * addEvent on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]");

const toggleNav = function (event) {
  navbar.classList.toggle("active");
  navbarToggler.classList.toggle("active");

}

addEventOnElem(navbarToggler, "click", toggleNav);

const closeNav = function () {
  navbar.classList.remove("active");
  navbarToggler.classList.remove("active");
}

// IMPORTANT
// addEventOnElem(navbarLinks, "click", closeNav);


/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");

  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});




const toggleDropDown = function (event) {
  event.preventDefault();
  let counter = 0;

  // Get the parent <li> of the clicked link
  const parentListItem = event.target.closest('li');

  // Find the dropdown within the parent <li>
  const dropDown = parentListItem.querySelector('.dropdown');
  const dropDown1 = parentListItem.querySelector('.dropdown1')
  console.log(dropDown1)

  // Increment the counter
  counter += 1;
  if (dropDown) {
    dropDown.classList.toggle('active');
  } else {
    dropDown1.classList.toggle('active');
  }

  // If counter is 2, update the href attribute of the link
  if (counter === 2) {
    dropDown.classList.remove('active')
    // Find the link within the parent <li>
    const link = parentListItem.querySelector('.navbar-link');
    console.log(link.href)
    link.href = link.href;
    window.location.href = link.href

  }
}


const handleLinkClick = function (event) {
  

  const action = event.target.dataset.action;

  if (action === 'dropdown') {
    toggleDropDown(event)
  } else if (action === 'navigate') {
    const href = event.target.getAttribute('href');
    window.location.href = href;

  }

}
navbarLinks.forEach(function(navlink) {
  navlink.addEventListener('click', handleLinkClick)
})


const toggleDropDown1 = function (event) {
  event.preventDefault();

  let counter = 0;

  // Get the parent <li> of the clicked link
  const parentListItem = event.target.closest('li');

  // Find the dropdown within the parent <li>
  const dropDown = parentListItem.querySelector('.dropdown1')
  console.log(dropDown)

  // Increment the counter
  counter += 1;
  dropDown.classList.toggle('active');
  

  // If counter is 2, update the href attribute of the link
  if (counter === 2) {
    dropDown.classList.remove('active')
    // Find the link within the parent <li>
    const link = parentListItem.querySelector('.navbar-link');
    console.log(link.href)
    link.href = link.href;
    window.location.href = link.href

  }
}


const handleLinkClick1 = function (event) {
  

  const action = event.target.dataset.action;

  if (action === 'dropdown1') {
    toggleDropDown1(event)
  } else if (action === 'navigate') {
    const href = event.target.getAttribute('href');
    window.location.href = href;
    
  }

}
navbarLinks.forEach(function(navlink) {
  navlink.addEventListener('click', handleLinkClick1)
})


const toggleDropDown3 = function (event) {
  event.preventDefault();
 let counter = 0

  // Get the parent <li> of the clicked link
  const parentListItem = event.target.closest('li');

  // Find the dropdown within the parent <li>
  const dropDown = parentListItem.querySelector('.dropdown')
  console.log(dropDown)

  // Increment the counter
  counter += 1;
  dropDown.classList.toggle('active');
  

  // If counter is 2, update the href attribute of the link
  if (counter === 2) {
    dropDown.classList.remove('active')

  }
}


// Togle contact Form
function toggleContact() {
  const toggleContact = document.querySelector(".toggleContact")
  const contactMenu = document.querySelector(".contactMenu")
  toggleContact.classList.toggle("c-active")
  contactMenu.classList.toggle("c-active")
}

// select hous functions

// for (let i = 9; i <= 17; i++) {
//   const amPm = i < 12 ? 'am' : 'pm';
//   const hour = i % 12 || 12;
//   const optionText = `${hour}:00 ${amPm}`

//   const selectHour = document.getElementById('selectHour');

//   const option = document.createElement('option');
//   option.value = i % 5;
//   option.text = optionText
//   selectHour.appendChild(option)
// }

var swiper = new Swiper(".slide-content", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // breakpoints: {
  //   0: {
  //     slidesPerView: 1,
  //   },
  //   520: {
  //     slidesPerView: 1,
  //   },
  //   950: {
  //     slidesPerView: 3,
  //   },
  // },
});
var swiper = new Swiper(".slide-content-video", {
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var swiper = new Swiper(".slide-content1", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 1,
    },
    950: {
      slidesPerView: 2,
    },
  },
});




// read more 
function toggleMore(button) {
  const description = button.previousElementSibling
  const btnMore = document.querySelector(".btn-more")
  description.classList.toggle("show-more-active")
  btnMore.classList.toggle("show-less")

  if (btnMore.classList.contains("show-less")) {
    button.innerText = "Close bio";
  }
  else {
    button.innerText = "View bio"
  }
}

function toggleMore1(button) {
  const description = button.previousElementSibling
  const btnMore = document.querySelector(".btn-more")
  description.classList.toggle("show-more-active")
  btnMore.classList.toggle("show-less")

  if (btnMore.classList.contains("show-less")) {
    button.innerText = "Close bio";
  }
  else {
    button.innerText = "View bio"
  }
}

// Function to show the notification bar with a message for a specified duration
// function showNotification(message, duration) {
//   var notificationBar = document.getElementById("notification-bar");
//   notificationBar.textContent = message;
//   notificationBar.style.display = "flex";
//   setTimeout(function () {
//     notificationBar.style.display = "none";


//   }, duration);
// }

// Example usage:
// showNotification("Easily accessible. Visitors parking available underground and around the condo complex.", 5000); // Show for 5 seconds


// footer copy right 
document.getElementById("copyright").innerHTML = "&copy; " + new Date().getFullYear() + " Dragonnier IT Solutions. All rights reserved.";

// document.addEventListener('contextmenu', function (e) {
//   e.preventDefault();
// });



