document.addEventListener('DOMContentLoaded', function() {
    // Category filtering
    const categoryButtons = document.querySelectorAll('.category-btn');
    const factCards = document.querySelectorAll('.fact-card');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const category = button.dataset.category;
            
            // Filter cards
            factCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
/*
    // Quiz functionality
    const quizOptions = document.querySelectorAll('.quiz-option');
    const checkAnswersBtn = document.getElementById('check-answers');
    const quizResult = document.getElementById('quiz-result');
    
    quizOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove selected class from siblings
            const siblings = option.parentElement.querySelectorAll('.quiz-option');
            siblings.forEach(sib => sib.classList.remove('selected'));
            
            // Add selected class to clicked option
            option.classList.add('selected');
        });
    });
    
    checkAnswersBtn.addEventListener('click', () => {
        const questions = document.querySelectorAll('.quiz-question');
        let correctAnswers = 0;
        
        questions.forEach(question => {
            const options = question.nextElementSibling.querySelectorAll('.quiz-option');
            const selectedOption = question.nextElementSibling.querySelector('.selected');
            
            if (selectedOption && selectedOption.dataset.correct === 'true') {
                correctAnswers++;
            }
        });
        
        // Display result
        quizResult.style.display = 'block';
        if (correctAnswers === questions.length) {
            quizResult.textContent = `Great job! You got all ${questions.length} questions correct!`;
            quizResult.className = 'result-message result-correct';
        } else {
            quizResult.textContent = `You got ${correctAnswers} out of ${questions.length} questions correct. Try again!`;
            quizResult.className = 'result-message result-incorrect';
        }
    });
*/

    
    // Back to top functionality
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Initially hide back to top button
    backToTopButton.style.display = 'none';
});