

 // Script pour le menu hamburger
 const menuToggle = document.getElementById("menu-toggle");
 const navbar = document.getElementById("navbar");

 menuToggle.addEventListener("click", () => {
     navbar.classList.toggle("hidden");
     navbar.classList.toggle("flex");
 });

 // Animation GSAP pour le texte de bienvenue
 gsap.fromTo("#welcome-title", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });
 gsap.fromTo("#welcome-text", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 1 });
 gsap.fromTo("#welcome-quote", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 1.5 });

 // Animation GSAP pour le logo
 gsap.fromTo("#logo", { rotationY: 1440 }, { rotationY: 0, duration: 1.5 });

 // Animation pour les sous-services
 const services = document.querySelectorAll('.service');

 services.forEach(service => {
     service.addEventListener('mouseover', () => {
         const subServices = service.querySelector('.sub-service');
         if (subServices) {
             gsap.to(subServices, { duration: 0.3, opacity: 1, display: 'flex' });
         }
     });

     service.addEventListener('mouseout', () => {
         const subServices = service.querySelector('.sub-service');
         if (subServices) {
             gsap.to(subServices, { duration: 0.3, opacity: 0, display: 'none' });
         }
     });
 });

 // Gestion de la flèche de retour en haut
const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.classList.remove("hidden");
    } else {
        scrollToTopButton.classList.add("hidden");
    }
});

// Fonction pour faire défiler vers le haut
scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
