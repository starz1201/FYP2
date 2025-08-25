// Category filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const tipCards = document.querySelectorAll('.tip-card');
    
    // Category filtering
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // Update active button
            categoryBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter cards with animation
            tipCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease-in';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Back to top functionality
    const backToTop = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.style.display = 'flex';
        } else {
            backToTop.style.display = 'none';
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({ 
            top: 0, 
            behavior: 'smooth' 
        });
    });

    // Initialize calculators with default values
    calculateLEDSavings();
    calculateWaterSavings();
});

// LED Bulb Savings Calculator
function calculateLEDSavings() {
    const bulbs = parseInt(document.getElementById('bulbs').value) || 10;
    const hours = parseInt(document.getElementById('hours').value) || 5;
    
    // Calculations based on average costs and consumption
    const incandescentWatts = 60;
    const ledWatts = 9;
    const electricityRate = 0.13; // $0.13 per kWh average
    
    // Calculate daily costs
    const dailyIncandescentCost = (incandescentWatts * hours * bulbs) / 1000 * electricityRate;
    const dailyLEDCost = (ledWatts * hours * bulbs) / 1000 * electricityRate;
    const dailySavings = dailyIncandescentCost - dailyLEDCost;
    const annualSavings = dailySavings * 365;
    
    // CO2 calculation (approximate 1.6 lbs CO2 per dollar saved)
    const co2Reduction = annualSavings * 1.6;
    
    // Update display
    const resultElement = document.getElementById('led-result');
    if (resultElement) {
        resultElement.innerHTML = `
            <p><strong>Daily savings:</strong> $${dailySavings.toFixed(2)}</p>
            <p><strong>Annual savings:</strong> $${annualSavings.toFixed(2)}</p>
            <p><strong>CO₂ reduced:</strong> ${co2Reduction.toFixed(0)} lbs/year</p>
            <p><strong>Equivalent to:</strong> Removing a car for ${(co2Reduction / 4600).toFixed(1)} months</p>
        `;
    }
}

// Water Usage Calculator
function calculateWaterSavings() {
    const currentTime = parseInt(document.getElementById('current-shower').value) || 10;
    const targetTime = parseInt(document.getElementById('target-shower').value) || 5;
    
    const gallonsPerMinute = 2.5; // Standard showerhead flow rate
    const waterRate = 0.004; // $0.004 per gallon average
    const heatingCost = 0.02; // Additional cost for heating water per gallon
    
    // Calculate savings
    const dailyCurrentGallons = currentTime * gallonsPerMinute;
    const dailyTargetGallons = targetTime * gallonsPerMinute;
    const dailySavingsGallons = Math.max(0, dailyCurrentGallons - dailyTargetGallons);
    const annualSavingsGallons = dailySavingsGallons * 365;
    const annualWaterCost = annualSavingsGallons * waterRate;
    const annualHeatingCost = annualSavingsGallons * heatingCost;
    const totalAnnualSavings = annualWaterCost + annualHeatingCost;
    
    // Update display
    const resultElement = document.getElementById('water-result');
    if (resultElement) {
        if (dailySavingsGallons > 0) {
            resultElement.innerHTML = `
                <p><strong>Daily water saved:</strong> ${dailySavingsGallons.toFixed(1)} gallons</p>
                <p><strong>Annual water saved:</strong> ${annualSavingsGallons.toFixed(0)} gallons</p>
                <p><strong>Annual cost savings:</strong> $${totalAnnualSavings.toFixed(2)}</p>
                <p><strong>Environmental impact:</strong> Saves ${(annualSavingsGallons / 1000).toFixed(1)}K gallons annually</p>
            `;
        } else {
            resultElement.innerHTML = `
                <p><strong>Note:</strong> Target time should be less than current time to see savings.</p>
                <p>Try reducing your shower time to save water and money!</p>
            `;
        }
    }
}

// Smooth scroll for anchor links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Add hover effects for tip cards
document.addEventListener('DOMContentLoaded', function() {
    const tipCards = document.querySelectorAll('.tip-card');
    
    tipCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Progressive loading animation for elements
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all major sections
    const sections = document.querySelectorAll('.tip-card, .stat-item, .challenge-week, .calculator-item');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Initialize progressive loading when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Delay the animation slightly for better UX
    setTimeout(observeElements, 100);
});

// Add click tracking for social sharing (optional analytics)
document.addEventListener('click', function(e) {
    if (e.target.closest('.social-sharing a')) {
        const platform = e.target.closest('a').getAttribute('title') || 'Unknown';
        console.log(`Shared on: ${platform}`);
        // Here you could add analytics tracking if needed
    }
});

// Input validation for calculators
document.addEventListener('input', function(e) {
    if (e.target.type === 'number') {
        const value = parseInt(e.target.value);
        const min = parseInt(e.target.getAttribute('min')) || 0;
        const max = parseInt(e.target.getAttribute('max')) || 999;
        
        if (value < min) {
            e.target.value = min;
        } else if (value > max) {
            e.target.value = max;
        }
        
        // Auto-calculate when values change
        if (e.target.id === 'bulbs' || e.target.id === 'hours') {
            setTimeout(calculateLEDSavings, 100);
        } else if (e.target.id === 'current-shower' || e.target.id === 'target-shower') {
            setTimeout(calculateWaterSavings, 100);
        }
    }
});

// Keyboard navigation improvements
document.addEventListener('keydown', function(e) {
    // ESC key closes any focused calculator inputs
    if (e.key === 'Escape') {
        document.activeElement.blur();
    }
    
    // Arrow keys for category navigation
    if (e.target.classList.contains('category-btn')) {
        const buttons = Array.from(document.querySelectorAll('.category-btn'));
        const currentIndex = buttons.indexOf(e.target);
        
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
            e.preventDefault();
            buttons[currentIndex - 1].focus();
        } else if (e.key === 'ArrowRight' && currentIndex < buttons.length - 1) {
            e.preventDefault();
            buttons[currentIndex + 1].focus();
        }
    }
});

// Add loading states for calculators
function showCalculatorLoading(calculatorId) {
    const resultElement = document.getElementById(calculatorId + '-result');
    if (resultElement) {
        resultElement.innerHTML = '<p style="text-align: center;"><i class="fas fa-spinner fa-spin"></i> Calculating...</p>';
    }
}

// Enhanced calculator functions with loading states
const originalCalculateLED = calculateLEDSavings;
const originalCalculateWater = calculateWaterSavings;

calculateLEDSavings = function() {
    showCalculatorLoading('led');
    setTimeout(originalCalculateLED, 200);
};

calculateWaterSavings = function() {
    showCalculatorLoading('water');
    setTimeout(originalCalculateWater, 200);
};