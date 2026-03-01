// Currently empty, but you can add animations, smooth scrolling, or interactive skills here.
// Example: smooth scroll for navbar links

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        if(this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});