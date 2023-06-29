const themeToggleBtn = document.querySelector(".theme-toggler");
const portafolio = document.querySelector(".portafolio");
let isDark = true;

themeToggleBtn.onclick=()=>{
    portafolio.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark!=isDark;
}