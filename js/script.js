const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {

sections.forEach(section => {

const top = section.getBoundingClientRect().top;
const trigger = window.innerHeight * 0.8;

if(top < trigger){
section.classList.add("show");
}

});

});