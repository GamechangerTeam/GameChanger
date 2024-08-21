const homePageSwiper = new Swiper("#homePageSwiper", {
  effect: "creative",
  allowTouchMove: false,
  speed: 500,
  // autoHeight: true,

  navigation: {
    nextEl: ".toMainPage",
    prevEl: ".toHomePage",
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-20%", 0, -1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});

const mainSwiper = new Swiper("#mainSwiper", {
  direction: "vertical",
  freeMode: true,
  speed: 500,
  mousewheel: true,
  // autoHeight: true,
  breakpoints: {
    1200: {
      freeMode: false,
    },
  },
});

const painBlockSwiper = new Swiper("#painBlockSwiper", {
  direction: "horizontal",
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    769: {
      direction: "vertical",
      slidesPerView: 3,
    },
  },
});

const mainInfo = [
  {
    name: "оптовая торговля",
    pain1: `2111`,
    pain2: "dasd",
    pain3: "asdaa",
  },
  {
    name: "Розничная торговля",
    pain1: `2111`,
    pain2: "dasd",
    pain3: "asdaa",
  },
  {
    name: "Строительство",
    pain1: `2111`,
    pain2: "dasd",
    pain3: "asdaa",
  },
  {
    name: "Производство",
    pain1: `2111`,
    pain2: "dasd",
    pain3: "asdaa",
  },
  {
    name: "Медицина",
    pain1: `2111`,
    pain2: "dasd",
    pain3: "asdaa",
  },
  {
    name: "Продажа недвижимости",
    pain1: `2111`,
    pain2: "dasd",
    pain3: "asdaa",
  },
  {
    name: "Образование",
    pain1: `2111`,
    pain2: "dasd",
    pain3: "asdaa",
  },
  {
    name: "Автосервис",
    pain1: `2111`,
    pain2: "dasd",
    pain3: "asdaa",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("video");
  let preloader = document.querySelector("#logo_preloader");

  const openConsultationPage = document.querySelectorAll(".open_consultation");
  const hideConsultationPage = document.querySelectorAll(".hide_consultation");
  const consultationPage = document.querySelector(".consultation");

  const homePage_cards = document.querySelector(".homepage__main");

  homePage_cards.addEventListener("click", (e) => {
    let btn = e.target.closest(".toMainPage");
    if (btn) {
      let lol = btn.getAttribute("data-name");
      console.log(lol);
    }
  });

  openConsultationPage.forEach((btn) => {
    btn.addEventListener("click", () => {
      consultationPage.classList.toggle("active");
    });
  });
  hideConsultationPage.forEach((btn) => {
    btn.addEventListener("click", () => {
      consultationPage.classList.toggle("active");
    });
  });

  video.addEventListener("canplaythrough", function () {
    preloader.style.display = "none";
  });
});



document.addEventListener("DOMContentLoaded", function() {
  // Находим блок #mainSwiper
  const mainSwiper = document.querySelector("#mainSwiper");
  
  if (window.innerWidth < 1200) {
    // Находим все элементы с классом replace
    const replaceElements = mainSwiper.querySelectorAll(".replace");

    // Находим блок #placeForMobileContent
    const placeForMobileContent = document.querySelector("#placeForMobileContent");

    // Перемещаем элементы в #placeForMobileContent
    replaceElements.forEach(function(element) {
      placeForMobileContent.appendChild(element);
    });

    // Удаляем блок #mainSwiper
    mainSwiper.remove();
  }
});
