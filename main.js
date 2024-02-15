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

const toggleNav = function () {
  navbar.classList.toggle("active");
  navbarToggler.classList.toggle("active");
}

addEventOnElem(navbarToggler, "click", toggleNav);

const closeNav = function () {
  navbar.classList.remove("active");
  navbarToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNav);



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

// Togle contact Form
function toggleContact() {
    const toggleContact = document.querySelector(".toggleContact")
    const contactMenu = document.querySelector(".contactMenu")
    toggleContact.classList.toggle("c-active")
    contactMenu.classList.toggle("c-active")
}

// select hous functions

for (let i = 9; i <= 17; i++) {
  const amPm = i < 12 ? 'am' : 'pm';
  const hour = i % 12 || 12;
  const optionText = `${hour}:00 ${amPm}`
  
  const selectHour = document.getElementById('selectHour');

  const option = document.createElement('option');
  option.value = i % 5;
  option.text = optionText
  selectHour.appendChild(option)
}

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

// footer copy right 
document.getElementById("copyright").innerHTML = "&copy; " + new Date().getFullYear() + " Orchard Family Dentistry. All rights reserved.";

// document.addEventListener('contextmenu', function (e) {
//   e.preventDefault();
// });

