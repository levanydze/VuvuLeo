const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 2;
const size = carouselImages[0].clientWidth;
carouselSlide.style.transform = "translateX(" + -size * counter + "px)";

nextBtn.addEventListener("click", () => {
  if (counter >= carouselImages.length - 2) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

prevBtn.addEventListener("click", () => {
  if (counter <= 1) return;
  carouselSlide.style.transition = "transform 0.4s  ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
});

carouselSlide.addEventListener("transitionend", () => {
  if (carouselImages[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 3;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
  if (carouselImages[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
  }
});

//

const carouselSlide1 = document.querySelector(".carousel-slide1");
const carouselImages1 = document.querySelectorAll(".carousel-slide1 img");

const prevBtn1 = document.querySelector("#prevBtn1");
const nextBtn1 = document.querySelector("#nextBtn1");

let counter1 = 2;
const size1 = carouselImages1[0].clientWidth;
carouselSlide1.style.transform = "translateX(" + -size1 * counter1 + "px)";

nextBtn1.addEventListener("click", () => {
  if (counter1 >= carouselImages1.length - 2) return;
  carouselSlide1.style.transition = "transform 0.4s ease-in-out";
  counter1++;
  carouselSlide1.style.transform = "translateX(" + -size1 * counter1 + "px)";
});

prevBtn1.addEventListener("click", () => {
  if (counter1 <= 1) return;
  carouselSlide1.style.transition = "transform 0.4s  ease-in-out";
  counter1--;
  carouselSlide1.style.transform = "translateX(" + -size1 * counter1 + "px)";
});

carouselSlide1.addEventListener("transitionend", () => {
  if (carouselImages1[counter1].id === "lastClone1") {
    carouselSlide1.style.transition = "none";
    counter1 = carouselImages1.length - 3;
    carouselSlide1.style.transform = "translateX(" + -size1 * counter1 + "px)";
  }
  if (carouselImages1[counter1].id === "firstClone1") {
    carouselSlide1.style.transition = "none";
    counter1 = carouselImages1.length - counter1;
    carouselSlide1.style.transform = "translateX(" + -size1 * counter1 + "px)";
  }
});

//

const carouselSlide2 = document.querySelector(".carousel-slide2");
const carouselImages2 = document.querySelectorAll(".carousel-slide2 img");

const prevBtn2 = document.querySelector("#prevBtn2");
const nextBtn2 = document.querySelector("#nextBtn2");

let counter2 = 2;
const size2 = carouselImages2[0].clientWidth;
carouselSlide2.style.transform = "translateX(" + -size2 * counter2 + "px)";

nextBtn2.addEventListener("click", () => {
  if (counter2 >= carouselImages2.length - 2) return;
  carouselSlide2.style.transition = "transform 0.4s ease-in-out";
  counter2++;
  carouselSlide2.style.transform = "translateX(" + -size2 * counter2 + "px)";
});

prevBtn2.addEventListener("click", () => {
  if (counter2 <= 1) return;
  carouselSlide2.style.transition = "transform 0.4s  ease-in-out";
  counter2--;
  carouselSlide2.style.transform = "translateX(" + -size2 * counter2 + "px)";
});

carouselSlide2.addEventListener("transitionend", () => {
  if (carouselImages2[counter2].id === "lastClone2") {
    carouselSlide2.style.transition = "none";
    counter2 = carouselImages2.length - 3;
    carouselSlide2.style.transform = "translateX(" + -size2 * counter2 + "px)";
  }
  if (carouselImages2[counter2].id === "firstClone2") {
    carouselSlide2.style.transition = "none";
    counter2 = carouselImages2.length - counter2;
    carouselSlide2.style.transform = "translateX(" + -size2 * counter2 + "px)";
  }
});
