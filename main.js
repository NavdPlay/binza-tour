const hamburger = document.getElementById("hamburger");
const wrapper = document.querySelector('.card-wrapper');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
});

document.getElementById('year').innerHTML = new Date().getFullYear();


document.getElementById('next').onclick = () => {
  wrapper.scrollBy({ left: 340, behavior: 'smooth' });
};

document.getElementById('prev').onclick = () => {
  wrapper.scrollBy({ left: -340, behavior: 'smooth' });
};
