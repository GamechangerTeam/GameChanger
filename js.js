//  ЭЛЕМЕНТ ДЛЯ ЗАДЕРЖКИ МЕЖДУ НАЖАТИЕМ КНОПОК
let ready = true;
const video = document.getElementById("video");
// ВИДЕО
const preloader = document.querySelector("#logo_preloader");
// ДОП. БЛОКИ СЛЕВА
const leftSection = document.querySelectorAll(".slideIn_left");
const openLeftSection = document.querySelectorAll(".open_left_section");
const hideLeftSection = document.querySelector(".hide_left_section");
const consultation_Page = document.querySelector(".consultation");

// ПОПАП
// const popup__contact_us = document.querySelector(".popup__contact_us");
// const open_popup = document.querySelector(".open_popup");
// // ЛОГИКА УДАЛЕНИЯ ПРЕЛОУДЕРА ПРИ ЗАГРУЗКЕ ВИДЕО
video.addEventListener("canplaythrough", function () {
  preloader.style.display = "none";
});

// ОТКРЫТЬ СЕКЦИЮ
openLeftSection.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.disabled = true;
    setTimeout(() => {
      btn.disabled = false;
    }, 500);
    consultation_Page.style.visibility = "visible";
    consultation_Page.style.opacity = "1";
    consultation_Page.classList.toggle("active");
  });
});

// ЗАКРЫТЬ СЕКЦИЮ
hideLeftSection.addEventListener("click", () => {
  consultation_Page.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  const trust = document.querySelector(".trust");
  const trustPosition = trust.getBoundingClientRect().top;
  const partner = document.querySelector(".partner");
  const partnerPosition = partner.getBoundingClientRect().top;

  const free = document.querySelector(".free");
  const comfort = document.querySelector(".comfort");

  // Проверяем, когда блок находится на самом верху или выше
  if (partnerPosition <= 0) {
    comfort.style.zIndex = "0";
    free.style.zIndex = "-1";
  } else if (trustPosition <= 0) {
    comfort.style.zIndex = "-1";
    free.style.zIndex = "0";
  }
});

// FAQ
const faq_list = document.querySelector(".faq__list");
// ОТКРЫТИЕ КАРТОЧЕК В FAQ
faq_list.addEventListener("click", (e) => {
  const card = e.target.closest(".faq__card");
  if (card) {
    const main = card.querySelector(".faq__main");
    const icon = card.querySelector(".plus-icon");
    if (main.style.maxHeight) {
      main.style.maxHeight = null;
      icon.classList.toggle("active");
    } else {
      main.style.maxHeight = main.scrollHeight + "px";
      icon.classList.toggle("active");
    }
  }
});

document.getElementById("checkBtn").addEventListener("click", function () {
  // Находим все чекбоксы с именем 'option'
  const checkboxes = document.querySelectorAll(
    'input[name="function"]:checked'
  );
  let selected = [];

  // Собираем значения выбранных чекбоксов
  checkboxes.forEach((checkbox) => {
    let label = checkbox.nextElementSibling;
    let text = label.querySelector(".price_text");
    console.log(text.textContent);
    selected.push(text.textContent);
  });

  console.log(selected);
});

