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


/*
// Esperar a que se cargue completamente el contenido del DOM
document.addEventListener("DOMContentLoaded", function () {
    // Obtener todos los elementos con la clase "icon_link"
    const hoverLinks = document.querySelectorAll(".icon_link");
  
    // Recorrer los elementos y agregar los eventos
    hoverLinks.forEach((link) => {
      link.addEventListener("mouseover", () => {
        // Mostrar el texto oculto con un efecto horizontal lento
        const hiddenText = link.querySelector(".texto");
        if (hiddenText) {
          showTextSlowly(hiddenText, 0.5); // 0.5 segundos para la duración de la animación (puedes ajustarlo)
        }
      });
  
      link.addEventListener("mouseout", () => {
        // Ocultar el texto oculto
        const hiddenText = link.querySelector(".texto");
        if (hiddenText) {
          hiddenText.style.opacity = 0;
          hiddenText.style.transform = "translateX(-100%)";
        }
      });
    });
  });
  
  // Función para mostrar el texto lentamente de manera horizontal
  function showTextSlowly(element, duration) {
    element.style.opacity = 1;
    element.style.transform = "translateX(0)";
  
    element.style.transition = `opacity ${duration}s, transform ${duration}s`;
  }
  */