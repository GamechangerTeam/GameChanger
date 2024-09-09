const burgerBtn  = document.querySelector(".burgerBtn")
const header  = document.querySelector(".header")

burgerBtn.addEventListener("click", (e) => {
  burgerBtn.classList.toggle("open")
  header.classList.toggle("open")
})
