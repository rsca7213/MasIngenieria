const contactNav = document.getElementById('contact-nav');
const inicioBtn = document.getElementById('inicio-btn');

contactNav.addEventListener("click", () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth'
    });
});

inicioBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
});