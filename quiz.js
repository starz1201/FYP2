document.addEventListener('DOMContentLoaded', function() {
    const quizOptions = document.querySelectorAll('.quiz-option');
    const checkAnswersBtn = document.getElementById('check-answers');
    const quizResult = document.getElementById('quiz-result');

    quizOptions.forEach(option => {
        option.addEventListener('click', () => {
            const siblings = option.parentElement.querySelectorAll('.quiz-option');
            siblings.forEach(sib => sib.classList.remove('selected'));
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

        quizResult.style.display = 'block';
        if (correctAnswers === questions.length) {
            quizResult.textContent = `Great job! You got all ${questions.length} questions correct!`;
            quizResult.className = 'result-message result-correct';
        } else {
            quizResult.textContent = `You got ${correctAnswers} out of ${questions.length} questions correct. Try again!`;
            quizResult.className = 'result-message result-incorrect';
        }
    });
});