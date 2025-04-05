// Script principal pour le site LAMALO CONSULTING

document.addEventListener('DOMContentLoaded', function() {
    // Gestion du menu mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            
            // Change l'icône du menu
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Fermer le menu mobile lors du clic sur un lien
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                
                // Réinitialiser l'icône du menu
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
    
    // Animation du header au scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '15px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Animation des éléments au scroll
    const animateOnScroll = function() {
        // Animation des cartes de service
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach((card, index) => {
            const cardPosition = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardPosition < windowHeight - 100) {
                // Ajouter un délai progressif pour chaque carte
                setTimeout(() => {
                    card.classList.add('animate');
                }, 100 * index);
            }
        });
        
        // Animation de la section mission
        const missionContent = document.querySelector('.mission-content');
        if (missionContent) {
            const missionPosition = missionContent.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (missionPosition < windowHeight - 100) {
                missionContent.classList.add('animate');
            }
        }
        
        // Animation de la section contact
        const contactContainer = document.querySelector('.contact-container');
        if (contactContainer) {
            const contactPosition = contactContainer.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (contactPosition < windowHeight - 100) {
                contactContainer.classList.add('animate');
            }
        }
    };
    
    // Exécution de l'animation au chargement et au scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
});
