document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".lazy-load");
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute("data-src");
                img.classList.add("loaded");
                observer.unobserve(img);
            }
        });
    }, { threshold: 0.1 });

    images.forEach(img => {
        observer.observe(img);
    });

    document.getElementById("lastModified").textContent = document.lastModified;
});