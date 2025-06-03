const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentIndex = 0;

function showSlide(index){
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if(i === index){
            slide.classList.add('active');
        }
    });
}

function showPrevious(){
    currentIndex = (currentIndex -1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

prev.addEventListener('click', showPrevious);

next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});
