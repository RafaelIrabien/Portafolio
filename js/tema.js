const themeToggleBtn = document.querySelector(".theme-toggler");
const inner = document.querySelector(".radio-inner");
const portafolio = document.querySelector(".portafolio");

let isDark = true;

themeToggleBtn.onclick=()=>{
    portafolio.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    inner.classList.toggle("active");
    isDark!=isDark;
}