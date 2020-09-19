const contactNav = document.getElementById('contact-nav');
const contactMd = document.getElementById('contact-md');
const contactLg = document.getElementById('contact-lg');
const aboutNav = document.getElementById('about-nav');
const aboutMd = document.getElementById('about-md');
const aboutLg = document.getElementById('about-lg');
const obrasNav = document.getElementById('obras-nav');
const obrasText = document.getElementById('obras-text');
const container2 = document.getElementById('container2');

contactLg.addEventListener("click", () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth'
    });
});

contactMd.addEventListener("click", () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth'
    });
});

contactNav.addEventListener("click", () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth'
    });
});

aboutNav.addEventListener("click", () => {
    window.scrollTo({
        top: container2.getBoundingClientRect().y,
        left: 0,
        behavior: 'smooth'
    });
});

aboutMd.addEventListener("click", () => {
    window.scrollTo({
        top: container2.getBoundingClientRect().y,
        left: 0,
        behavior: 'smooth'
    });
});

aboutLg.addEventListener("click", () => {
    window.scrollTo({
        top: container2.getBoundingClientRect().y,
        left: 0,
        behavior: 'smooth'
    });
});

obrasNav.addEventListener("click", () => {
    window.scrollTo({
        top: obrasText.getBoundingClientRect().y - 10,
        left: 0,
        behavior: 'smooth'
    });
});