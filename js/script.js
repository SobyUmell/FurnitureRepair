
const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.navbar-pog',
    clickable: true,
  },
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.navbar-btn-right',
    prevEl: '.navbar-btn-left',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const tabsItems = document.querySelectorAll(".tabs__item");
const tabsBlocks = document.querySelectorAll(".tabs__block");

tabsItems.forEach((item) => {
  item.addEventListener("click", () => {
    let currentItem = item;
    let id = currentItem.getAttribute("data-tab");
    let currentBlock = document.querySelector(id);

    tabsItems.forEach((item) => {
      item.classList.remove("active");
    });
    tabsBlocks.forEach((item) => {
      item.classList.remove("active");
    });

    currentItem.classList.add("active");
    currentBlock.classList.add("active");
  });
});



let video;

video = document.getElementsByTagName("video")[0];
let play = document.querySelector(".video__play");
console.log(video);
console.log(play);


play.addEventListener("click", () => {
  video.setAttribute("controls", "controls");
  video.play();
  play.classList.add("vanished");
})

video.addEventListener("pause", () => {
  play.classList.remove("vanished");
})
