const firstnextclick = document.querySelectorAll(".next-btn");
const previousbtnclick = document.querySelectorAll(".previous-btn");

let formstep = 1;

const next = () => {
    if (formstep == 1) {
        document.querySelector(".step-1").classList.remove("active");
        document.querySelector(".step-2").classList.add("active");
        formstep = 2;
    } else if (formstep == 2) {
        document.querySelector(".step-2").classList.remove("active");
        document.querySelector(".step-3").classList.add("active");
        formstep = 3;
    }
}

const previous = () => {
    if (formstep == 2) {
        document.querySelector(".step-1").classList.add("active");
        document.querySelector(".step-2").classList.remove("active");
        formstep = 1;
    } else if (formstep == 3) {
        document.querySelector(".step-2").classList.add("active");
        document.querySelector(".step-3").classList.remove("active");
        formstep = 2;
    }
}

firstnextclick.forEach(e => e.addEventListener("click", next));

previousbtnclick.forEach(e => e.addEventListener("click", previous));