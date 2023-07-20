const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
//Obtenemos la ultima imagen del slider
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

//Obtenermos el ultimo elemento y lo colocamos en el slider
//Colocamos el ultimo elemento al principio
slider.insertAdjacentElement('afterbegin', sliderSectionLast);


function Next() {
    //Obtenemos al primer elemento
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];

    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 1s";

    setTimeout(function(){
        //Quitamos la transición
        slider.style.transition = "none";
        //Ubicamos el primer elemento antes de terminar
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 1000);
}

function Prev() {
    let sliderSection = document.querySelectorAll(".slider__section");
    //Obtenemos la ultima imagen del slider
    let sliderSectionLast = sliderSection[sliderSection.length -1];

    slider.style.marginLeft = "0";
    slider.style.transition = "all 1s";

    setTimeout(function() {
       slider.style.transition = "none";
       slider.insertAdjacentElement('afterbegin', sliderSectionLast);
       slider.style.marginLeft = "-100%";
    }, 1000);
}

/*Asignamos las funciones a los botones con el evento click */
btnRight.addEventListener('click', function() {
    Next();
});

btnLeft.addEventListener('click', function() {
    Prev();
});


/*
// Slider Automático 
//setInterval es para que se ejecute algo cada cierto tiempo
setInterval(function() {
    //Avanzará a la derecha cada 5 segundos
    Next();
}, 6000);
*/



            /*Slider de Portafolio */
const slider2 = document.querySelector("#slider2");
let sliderSection2 = document.querySelectorAll(".slider__section2");
//Obtenemos la ultima imagen del slider2
let sliderSectionLast2 = sliderSection2[sliderSection2.length -1];

const btnLeft2 = document.querySelector("#btn-left2");
const btnRight2 = document.querySelector("#btn-right2");

//Obtenermos el ultimo elemento y lo colocamos en el slider2
//Colocamos el ultimo elemento al principio
slider2.insertAdjacentElement('afterbegin', sliderSectionLast2);


function Next2() {
    //Obtenemos al primer elemento
    let sliderSectionFirst2 = document.querySelectorAll(".slider__section2")[0];

    slider2.style.marginLeft = "-200%";
    slider2.style.transition = "all 1s";

    setTimeout(function(){
        //Quitamos la transición
        slider2.style.transition = "none";
        //Ubicamos el primer elemento antes de terminar
        slider2.insertAdjacentElement('beforeend', sliderSectionFirst2);
        slider2.style.marginLeft = "-100%";
    }, 1000);
}

function Prev2() {
    let sliderSection2 = document.querySelectorAll(".slider__section2");
    //Obtenemos la ultima imagen del slider2
    let sliderSectionLast2 = sliderSection2[sliderSection2.length -1];

    slider2.style.marginLeft = "0";
    slider2.style.transition = "all 1s";

    setTimeout(function() {
       slider2.style.transition = "none";
       slider2.insertAdjacentElement('afterbegin', sliderSectionLast2);
       slider2.style.marginLeft = "-100%";
    }, 1000);
}

/*Asignamos las funciones a los botones con el evento click */
btnRight2.addEventListener('click', function() {
    Next2();
});

btnLeft2.addEventListener('click', function() {
    Prev2();
});


/*
// Slider Automático 
//setInterval es para que se ejecute algo cada cierto tiempo
setInterval(function() {
    //Avanzará a la derecha cada 5 segundos
    Next();
}, 6000);
*/