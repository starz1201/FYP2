document.addEventListener('DOMContentLoaded', function() {
    // Animation on scroll effect for resource cards
    const cards = document.querySelectorAll('.resource-card');
    
    if ('IntersectionObserver' in window) {
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    cardObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        cards.forEach(card => {
            cardObserver.observe(card);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        cards.forEach(card => {
            card.classList.add('animated');
        });
    }
});