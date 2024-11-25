

const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((navLink) => navLink.classList.remove("on"));

    this.classList.add("on");
  });
});

const Myobserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const elements = document.querySelectorAll(".hidden");

elements.forEach((element) => Myobserver.observe(element));

const obs1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("showscale");
    } else {
      entry.target.classList.remove("showscale");
    }
  });
});

const elements1 = document.querySelectorAll(".hiddenscale");

elements1.forEach((element) => obs1.observe(element));

let  menuIcon = document.querySelector('.mobile-button');
let navbar = document.querySelector('.menu');


menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
})

let next = document.querySelector('.next');
        let prev = document.querySelector('.prev');
        let slider = document.querySelector('.slider');

next.addEventListener('click', function () {
  let slides = document.querySelectorAll('.slides');
  slider.appendChild(slides[0]);
});
prev.addEventListener('click', function() {
  let slides = document.querySelectorAll('.slides');
  slider.insertBefore(slides[slides.length - 1], slides[0])
})


       



