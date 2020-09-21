const contactNav = document.getElementById('contact-nav');
contactNav.addEventListener("click", () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth'
    });
});