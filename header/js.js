const burgerBtn  = document.querySelector(".burgerBtn")
const header__list  = document.querySelector(".header__list")
const headerBackground  = document.querySelector(".header--background")
const contactWrapper  = document.querySelector(".contact-wrapper")

burgerBtn.addEventListener("click", (e) => {
  burgerBtn.classList.toggle("open")
  header__list.classList.toggle("open")
  headerBackground.classList.toggle("open")
  contactWrapper.classList.toggle("open")
})
