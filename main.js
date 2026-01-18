const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
});

document.getElementById('year').innerHTML = new Date().getFullYear();