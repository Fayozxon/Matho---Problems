'use strict'

// Formula Card Scripts
let formulas = document.getElementsByClassName("formula");

for (let i = 0; i < formulas.length; i++) {
    let btn = formulas[i].querySelector(".formula-btn");

    btn.addEventListener("click", function() {
        formulas[i].classList.toggle("full");
    });
}

// To Top Button Scripts
let topBtn = document.querySelector('.top-button');

window.addEventListener('scroll', function() {
    topBtn.classList.toggle('active', window.scrollY > 0);
});