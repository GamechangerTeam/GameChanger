const burgerBtn = document.querySelector(".burgerBtn");
const header = document.querySelector(".header");
const copy_number = document.querySelector(".copy_number");

burgerBtn.addEventListener("click", (e) => {
  burgerBtn.classList.toggle("open");
  header.classList.toggle("open");
});

copy_number.addEventListener("click", () => {
  navigator.clipboard.writeText(copyText.value);
});
