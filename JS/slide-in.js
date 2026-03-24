function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < window.innerHeight && rect.bottom > 0
    );
}

const slideElements = document.querySelectorAll('.slide');

function checkSlideIn() {
    slideElements.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add('slide-in');
        } else {
            element.classList.remove('slide-in');
        }
    });
}

window.addEventListener('scroll', checkSlideIn);
window.addEventListener('load', checkSlideIn);
