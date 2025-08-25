// Game themes with items and educational content
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (!isAuthenticated || !currentUser) {
        // If not authenticated, redirect to login page
        window.location.href = 'login.html';
        return;
    }
    
    // Optional: Add user information to the game interface
    // For example, add a welcome message
    const headerElement = document.querySelector('header h1');
    if (headerElement) {
        // Create a welcome message element
        const welcomeMsg = document.createElement('div');
        welcomeMsg.className = 'welcome-message';
        welcomeMsg.textContent = `Welcome, ${currentUser.username}!`;
        welcomeMsg.style.fontSize = '1rem';
        welcomeMsg.style.marginTop = '5px';
        welcomeMsg.style.color = '#555';
        
        // Create logout button
        const logoutBtn = document.createElement('button');
        logoutBtn.textContent = 'Logout';
        logoutBtn.className = 'logout-btn';
        logoutBtn.style.marginLeft = '10px';
        logoutBtn.style.padding = '5px 10px';
        logoutBtn.style.fontSize = '0.8rem';
        logoutBtn.style.cursor = 'pointer';
        logoutBtn.style.backgroundColor = '#f44336';
        logoutBtn.style.color = 'white';
        logoutBtn.style.border = 'none';
        logoutBtn.style.borderRadius = '4px';
        
        // Add event listener to logout button
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('isAuthenticated');
            window.location.href = 'login.html';
        });
        
        // Create a container for the welcome message and logout button
        const userInfoContainer = document.createElement('div');
        userInfoContainer.style.display = 'flex';
        userInfoContainer.style.alignItems = 'center';
        userInfoContainer.style.justifyContent = 'center';
        userInfoContainer.appendChild(welcomeMsg);
        userInfoContainer.appendChild(logoutBtn);
        
        // Insert after the header's h1 element
        headerElement.parentNode.insertBefore(userInfoContainer, headerElement.nextSibling);
    }
});

const gameThemes = {
    recycling: {
        items: [
            { emoji: '♻️', name: 'Recycling Symbol', info: 'The universal recycling symbol represents the recycling process of collection, processing, and buying recycled products.' },
            { emoji: '🗑️', name: 'Trash Bin', info: 'Proper waste sorting is the first step in effective recycling.' },
            { emoji: '📄', name: 'Paper', info: 'Recycling one ton of paper saves about 17 trees and 7,000 gallons of water.' },
            { emoji: '🥫', name: 'Tin Can', info: 'Aluminum cans can be recycled infinitely without quality degradation.' },
            { emoji: '🔋', name: 'Battery', info: 'Batteries contain toxic chemicals and should be recycled at special collection points.' },
            { emoji: '📱', name: 'Mobile Phone', info: 'E-waste contains valuable materials like gold and silver that can be recovered.' },
            { emoji: '🧴', name: 'Plastic Bottle', info: 'It takes over 400 years for plastic bottles to decompose in landfills.' },
            { emoji: '🥤', name: 'Drink Cup', info: 'Many disposable cups are lined with plastic, making them difficult to recycle.' },
            { emoji: '📦', name: 'Cardboard Box', info: 'Cardboard can be recycled 5-7 times before the fibers become too short.' },
            { emoji: '🧩', name: 'Plastic Toy', info: 'Many plastic toys cannot be recycled and end up in landfills for hundreds of years.' },
            { emoji: '👕', name: 'Clothing', info: 'Textile recycling can save 7,000-12,000 gallons of water per ton of fabric.' },
            { emoji: '💻', name: 'Computer', info: 'Recycling one million laptops saves enough energy to power 3,500 homes for a year.' }
        ],
        backIcon: '♻️'
    },
    ocean: {
        items: [
            { emoji: '🐠', name: 'Fish', info: 'Over 3 billion people depend on marine and coastal biodiversity for their livelihoods.' },
            { emoji: '🐢', name: 'Turtle', info: 'Sea turtles often mistake plastic bags for jellyfish, causing them to choke or starve.' },
            { emoji: '🐙', name: 'Octopus', info: 'Octopuses are highly intelligent and can use tools, solve puzzles, and recognize individual humans.' },
            { emoji: '🐬', name: 'Dolphin', info: 'Dolphins are caught in fishing nets meant for other species, known as bycatch.' },
            { emoji: '🐚', name: 'Shell', info: 'Shells are made of calcium carbonate and are threatened by ocean acidification.' },
            { emoji: '🦀', name: 'Crab', info: 'Crabs are important for ecosystems as they clean the ocean floor of dead organisms.' },
            { emoji: '🦈', name: 'Shark', info: 'Sharks are apex predators that help maintain the balance of marine ecosystems.' },
            { emoji: '🌊', name: 'Wave', info: 'Ocean waves are caused by wind transferring energy to the water surface.' },
            { emoji: '🐋', name: 'Whale', info: 'Whales play a crucial role in capturing carbon and fighting climate change.' },
            { emoji: '🦑', name: 'Squid', info: 'Squids have three hearts, blue blood, and are among the most intelligent invertebrates.' },
            { emoji: '🐡', name: 'Pufferfish', info: 'Pufferfish can inflate their bodies as a defense mechanism against predators.' },
            { emoji: '🧜', name: 'Mermaid', info: 'Mermaid folklore exists in cultures around the world, often representing the mystery of the ocean.' }
        ],
        backIcon: '🌊'
    },
    energy: {
        items: [
            { emoji: '☀️', name: 'Sun', info: 'Solar energy is the most abundant energy source on Earth.' },
            { emoji: '💨', name: 'Wind', info: 'Wind energy is one of the fastest-growing renewable energy sources worldwide.' },
            { emoji: '💧', name: 'Water Droplet', info: 'Hydropower is generated by the force of flowing water and is a leading renewable energy source.' },
            { emoji: '🔥', name: 'Fire', info: 'Biomass energy comes from burning organic materials like wood, crops, and waste.' },
            { emoji: '🌱', name: 'Seedling', info: 'Biofuels made from plants can replace fossil fuels in many applications.' },
            { emoji: '⚡', name: 'Lightning', info: 'Lightning contains massive amounts of electricity but is difficult to harness safely.' },
            { emoji: '💡', name: 'Light Bulb', info: 'LED bulbs use 75% less energy and last 25 times longer than incandescent bulbs.' },
            { emoji: '🔌', name: 'Electric Plug', info: 'Phantom energy is electricity used by devices even when they appear to be off.' },
            { emoji: '🌪️', name: 'Tornado', info: 'Geothermal energy taps into the Earth\'s internal heat for sustainable power.' },
            { emoji: '🚗', name: 'Car', info: 'Electric vehicles can significantly reduce carbon emissions from transportation.' },
            { emoji: '🏭', name: 'Factory', info: 'Industry accounts for about 24% of global energy consumption.' },
            { emoji: '🏠', name: 'House', info: 'Energy-efficient homes can reduce energy consumption by up to 50%.' }
        ],
        backIcon: '⚡'
    }
};

// Recycling facts for the info popup
const recyclingFacts = [
    "Recycling one aluminum can saves enough energy to run a TV for three hours.",
    "The average person generates over 4 pounds of trash every day and about 1.5 tons of solid waste per year.",
    "Recycling one glass bottle saves enough energy to power a computer for 30 minutes.",
    "Americans throw away 25 billion styrofoam coffee cups every year.",
    "Plastic bags and other plastic garbage thrown into the ocean kill as many as 1 million sea creatures annually.",
    "Recycling plastic saves twice as much energy as burning it in an incinerator.",
    "The energy saved from recycling one glass bottle can run a 100-watt light bulb for four hours.",
    "Making recycled paper instead of new paper uses 64% less energy and creates 74% less air pollution.",
    "The average American uses seven trees a year in paper, wood, and other products made from trees.",
    "Glass can be recycled indefinitely without any loss in purity or quality."
];

// Game state variables
let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let isProcessing = false;
let gameStarted = false;
let movesCount = 0;
let timerInterval;
let seconds = 0;
let minutes = 0;
let currentDifficulty = 'easy';
let currentTheme = 'recycling';
let soundEnabled = true;
let score = 0;
let maxPairs = 0;
let currentFactIndex = 0;

// Difficulty settings
const difficultySettings = {
    easy: { pairs: 6, timeLimit: null },
    medium: { pairs: 8, timeLimit: 120 },
    hard: { pairs: 12, timeLimit: 90 }
};

// Sound effects
const sounds = {
    flip: new Audio('https://assets.mixkit.co/active_storage/sfx/2073/2073.wav'),
    match: new Audio('https://assets.mixkit.co/active_storage/sfx/270/270.wav'),
    fail: new Audio('https://assets.mixkit.co/active_storage/sfx/1357/1357.wav'),
    win: new Audio('https://assets.mixkit.co/active_storage/sfx/583/583.wav'),
    click: new Audio('https://assets.mixkit.co/active_storage/sfx/1126/1126.wav'),
    timeWarning: new Audio('https://assets.mixkit.co/active_storage/sfx/1033/1033.wav')
};

// Set volume for all sounds
Object.values(sounds).forEach(sound => {
    sound.volume = 0.3;
});

// DOM elements
const movesCounter = document.getElementById('moves-count');
const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('score');
const gameBoard = document.getElementById('game-board');
const restartButton = document.getElementById('restart');
const resultPopup = document.getElementById('result-popup');
const resultMessage = document.getElementById('result-message');
const resultMoves = document.getElementById('result-moves');
const resultTime = document.getElementById('result-time');
const resultScore = document.getElementById('result-score');
const newGameButton = document.getElementById('new-game');
const soundToggle = document.getElementById('sound-toggle');
const infoButton = document.getElementById('info-btn');
const infoPopup = document.getElementById('info-popup');
const recyclingFactEl = document.getElementById('recycling-fact');
const closeInfoButton = document.getElementById('close-info');
const nextFactButton = document.getElementById('next-fact');
const difficultyButtons = document.querySelectorAll('.difficulty-btn');
const themeButtons = document.querySelectorAll('.theme-btn');
const cardInfoContainer = document.getElementById('card-info');
const cardInfoTitle = document.getElementById('card-info-title');
const cardInfoContent = document.getElementById('card-info-content');
const closeCardInfoButton = document.querySelector('.close-info');
const confettiContainer = document.getElementById('confetti');

// Initialize the game
function initializeGame() {
    resetGame();
    updateTheme();
    generateCards();
    startGame();
    playSound('click');
}

// Update theme
function updateTheme() {
    document.body.className = `theme-${currentTheme}`;
}

// Generate cards based on current difficulty and theme
function generateCards() {
    // Clear the board
    gameBoard.innerHTML = '';
    
    // Get number of pairs based on difficulty
    const numberOfPairs = difficultySettings[currentDifficulty].pairs;
    maxPairs = numberOfPairs;
    
    // Get items for current theme
    const themeItems = gameThemes[currentTheme].items;
    
    // Select random items for the game
    const selectedItems = themeItems
        .sort(() => 0.5 - Math.random())
        .slice(0, numberOfPairs);
    
    // Create pairs
    const cardValues = [...selectedItems, ...selectedItems];
    
    // Shuffle the array
    const shuffledCards = shuffleArray(cardValues);
    
    // Adjust grid based on number of cards
    if (numberOfPairs <= 6) {
        gameBoard.style.gridTemplateColumns = 'repeat(4, 1fr)';
    } else if (numberOfPairs <= 8) {
        gameBoard.style.gridTemplateColumns = 'repeat(4, 1fr)';
    } else {
        gameBoard.style.gridTemplateColumns = 'repeat(6, 1fr)';
    }
    
    // Create card elements
    shuffledCards.forEach((item, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.value = item.emoji;
        card.dataset.index = index;
        card.dataset.name = item.name;
        card.dataset.info = item.info;
        
        // Create front and back of card
        const cardFront = document.createElement('div');
        cardFront.classList.add('card-front');
        cardFront.innerHTML = item.emoji;
        
        // Add info icon to card front
        const infoIcon = document.createElement('div');
        infoIcon.classList.add('info-icon');
        infoIcon.innerHTML = 'ℹ️';
        infoIcon.style.position = 'absolute';
        infoIcon.style.bottom = '5px';
        infoIcon.style.right = '5px';
        infoIcon.style.fontSize = '14px';
        infoIcon.style.opacity = '0.7';
        cardFront.appendChild(infoIcon);
        
        const cardBack = document.createElement('div');
        cardBack.classList.add('card-back');
        cardBack.innerHTML = gameThemes[currentTheme].backIcon;
        
        // Append to card
        card.appendChild(cardFront);
        card.appendChild(cardBack);
        
        // Add click event
        card.addEventListener('click', flipCard);
        
        // Add info click event
        infoIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            showCardInfo(item);
        });
        
        // Add to cards array and game board
        cards.push(card);
        gameBoard.appendChild(card);
    });
}

// Show card info
function showCardInfo(item) {
    cardInfoTitle.textContent = item.name;
    cardInfoContent.textContent = item.info;
    cardInfoContainer.classList.add('show');
    playSound('click');
}

// Shuffle array using Fisher-Yates algorithm
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Start game timer
function startGame() {
    gameStarted = true;
    startTimer();
}

// Handle card flip
function flipCard() {
    if (isProcessing || this.classList.contains('flipped') || flippedCards.length >= 2) {
        return;
    }
    
    // Flip the card
    this.classList.add('flipped');
    playSound('flip');
    flippedCards.push(this);
    
    // If we have 2 flipped cards, check for match
    if (flippedCards.length === 2) {
        movesCount++;
        movesCounter.textContent = movesCount;
        isProcessing = true;
        
        if (flippedCards[0].dataset.value === flippedCards[1].dataset.value) {
            // Match found
            setTimeout(() => {
                flippedCards.forEach(card => {
                    card.classList.add('matched');
                    card.style.visibility = 'hidden';
                });
                
                // Update score based on difficulty
                let pointsEarned = 10;
                if (currentDifficulty === 'medium') pointsEarned = 20;
                if (currentDifficulty === 'hard') pointsEarned = 30;
                
                // Add bonus points for quick matches
                if (movesCount < maxPairs * 2) {
                    pointsEarned += 5;
                }
                
                score += pointsEarned;
                scoreElement.textContent = score;
                // Play match sound
                playSound('match');
                
                matchedPairs++;
                resetFlippedCards();
                
                // Check if game is complete
                if (matchedPairs === maxPairs) {
                    endGame(true);
                }
            }, 500);
        } else {
            // No match
            setTimeout(() => {
                flippedCards.forEach(card => {
                    card.classList.remove('flipped');
                });
                
                // Deduct points for wrong match
                let pointsDeducted = 2;
                if (currentDifficulty === 'medium') pointsDeducted = 3;
                if (currentDifficulty === 'hard') pointsDeducted = 5;
                
                score = Math.max(0, score - pointsDeducted);
                scoreElement.textContent = score;
                
                // Play fail sound
                playSound('fail');
                
                resetFlippedCards();
            }, 1000);
        }
    }
}

// Reset flipped cards
function resetFlippedCards() {
    flippedCards = [];
    isProcessing = false;
}

// Timer functions
function startTimer() {
    clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    timerElement.textContent = '00:00';
    
    // Get time limit from difficulty settings
    const timeLimit = difficultySettings[currentDifficulty].timeLimit;
    
    timerInterval = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
        
        const minutesText = minutes < 10 ? `0${minutes}` : minutes;
        const secondsText = seconds < 10 ? `0${seconds}` : seconds;
        
        timerElement.textContent = `${minutesText}:${secondsText}`;
        
        // Check time limit if applicable
        if (timeLimit) {
            const totalSeconds = minutes * 60 + seconds;
            
            // Warning when 20% of time is left
            if (totalSeconds === Math.floor(timeLimit * 0.8)) {
                playSound('timeWarning');
                timerElement.classList.add('warning');
                setTimeout(() => {
                    timerElement.classList.remove('warning');
                }, 1000);
            }
            
            if (totalSeconds >= timeLimit) {
                endGame(false);
            }
        }
    }, 1000);
}

// End game
function endGame(isWin) {
    clearInterval(timerInterval);
    
    resultMoves.textContent = movesCount;
    resultTime.textContent = timerElement.textContent;
    resultScore.textContent = score;
    
    if (isWin) {
        resultMessage.textContent = "You Won! 🎉";
        playSound('win');
        createConfetti();
    } else {
        resultMessage.textContent = "Time's Up! 😢";
        playSound('fail');
    }
    
    setTimeout(() => {
        resultPopup.classList.add('show');
    }, 500);
}

// Reset game
function resetGame() {
    clearInterval(timerInterval);
    gameBoard.innerHTML = '';
    cards = [];
    flippedCards = [];
    matchedPairs = 0;
    isProcessing = false;
    gameStarted = false;
    movesCount = 0;
    seconds = 0;
    minutes = 0;
    score = 0;
    
    movesCounter.textContent = '0';
    timerElement.textContent = '00:00';
    scoreElement.textContent = '0';
    resultPopup.classList.remove('show');
    infoPopup.classList.remove('show');
    cardInfoContainer.classList.remove('show');
    
    // Clear any remaining confetti
    confettiContainer.innerHTML = '';
}

// Show recycling fact
function showRecyclingFact() {
    recyclingFactEl.innerHTML = `<p>${recyclingFacts[currentFactIndex]}</p>`;
    infoPopup.classList.add('show');
    playSound('click');
}

// Move to next fact
function nextFact() {
    currentFactIndex = (currentFactIndex + 1) % recyclingFacts.length;
    recyclingFactEl.innerHTML = `<p>${recyclingFacts[currentFactIndex]}</p>`;
    playSound('click');
}

// Toggle sound
function toggleSound() {
    soundEnabled = !soundEnabled;
    
    if (soundEnabled) {
        soundToggle.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
        soundToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
    
    playSound('click');
}

// Play sound if enabled
function playSound(soundName) {
    if (soundEnabled && sounds[soundName]) {
        // Create a clone to allow overlapping sounds
        sounds[soundName].cloneNode(true).play().catch(e => {
            // Ignore errors - some browsers block autoplay
        });
    }
}

// Create confetti effect
function createConfetti() {
    confettiContainer.innerHTML = '';
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-piece');
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.backgroundColor = getRandomConfettiColor();
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.animationDelay = Math.random() * 5 + 's';
        confettiContainer.appendChild(confetti);
    }
}

// Get random confetti color from theme
function getRandomConfettiColor() {
    const colors = [
        getComputedStyle(document.documentElement).getPropertyValue('--primary-color'),
        getComputedStyle(document.documentElement).getPropertyValue('--secondary-color'),
        getComputedStyle(document.documentElement).getPropertyValue('--accent-color'),
        getComputedStyle(document.documentElement).getPropertyValue('--light-color')
    ];
    
    return colors[Math.floor(Math.random() * colors.length)];
}

// Set difficulty
function setDifficulty(difficulty) {
    currentDifficulty = difficulty;
    
    // Update active button
    difficultyButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.difficulty === difficulty) {
            btn.classList.add('active');
        }
    });
    
    // Restart game with new difficulty
    if (gameStarted) {
        initializeGame();
    }
    
    playSound('click');
}

// Set theme
function setTheme(theme) {
    currentTheme = theme;
    
    // Update active button
    themeButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.theme === theme) {
            btn.classList.add('active');
        }
    });
    
    // Restart game with new theme
    if (gameStarted) {
        initializeGame();
    }
    
    playSound('click');
}

// Event listeners
restartButton.addEventListener('click', initializeGame);
newGameButton.addEventListener('click', initializeGame);
soundToggle.addEventListener('click', toggleSound);
infoButton.addEventListener('click', showRecyclingFact);
closeInfoButton.addEventListener('click', () => infoPopup.classList.remove('show'));
nextFactButton.addEventListener('click', nextFact);
closeCardInfoButton.addEventListener('click', () => cardInfoContainer.classList.remove('show'));

// Difficulty button event listeners
difficultyButtons.forEach(btn => {
    btn.addEventListener('click', () => setDifficulty(btn.dataset.difficulty));
});

// Theme button event listeners
themeButtons.forEach(btn => {
    btn.addEventListener('click', () => setTheme(btn.dataset.theme));
});

// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeGame);

// DOM Elements for instruction popup
const instructionPopup = document.getElementById('instruction-popup');
const closeInstructionBtn = document.getElementById('close-instruction');
const dontShowAgainBtn = document.getElementById('dont-show-again');

// Create help button and add to body
const helpBtn = document.createElement('button');
helpBtn.id = 'help-btn';
helpBtn.innerHTML = '<i class="fas fa-question"></i>';
document.body.appendChild(helpBtn);

// Function to show instruction popup - Modified to prevent closing without button click
function showInstructions() {
    instructionPopup.classList.add('show');
    playSound('click');
    
    // Prevent closing by clicking outside
    // Force user to click a button to close
    instructionPopup.addEventListener('click', function(e) {
        if (e.target === instructionPopup) {
            e.stopPropagation();
            return false;
        }
    });
}

// Check if first visit - Modified to always show instructions
function checkFirstVisit() {
    // Always show instructions on load, regardless of visit history
    setTimeout(showInstructions, 500);
}

// Event listeners for instruction popup
closeInstructionBtn.addEventListener('click', () => {
    instructionPopup.classList.remove('show');
    playSound('click');
});

dontShowAgainBtn.addEventListener('click', () => {
    instructionPopup.classList.remove('show');
    localStorage.setItem('dontShowInstructions', 'true');
    playSound('click');
});

helpBtn.addEventListener('click', showInstructions);

// Add checkFirstVisit to document load
document.addEventListener('DOMContentLoaded', () => {
    initializeGame();
    checkFirstVisit();
});
        // Add logout functionality
        document.getElementById('logout-btn').addEventListener('click', function() {
            localStorage.removeItem('isAuthenticated');
            window.location.href = 'login.html';
        });
        
        // Display username in the game interface
        document.addEventListener('DOMContentLoaded', function() {
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (currentUser) {
                const headerElement = document.querySelector('header h1');
                const welcomeMsg = document.createElement('div');
                welcomeMsg.className = 'welcome-user';
                welcomeMsg.textContent = `Player: ${currentUser.username}`;
                welcomeMsg.style.fontSize = '1rem';
                welcomeMsg.style.marginTop = '5px';
                welcomeMsg.style.textAlign = 'center';
                welcomeMsg.style.color = '#555';
                
                headerElement.parentNode.insertBefore(welcomeMsg, headerElement.nextSibling);
            }
        });
        document.addEventListener('DOMContentLoaded', function() {
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (currentUser) {
                // Create a cleaner welcome message container
                const headerElement = document.querySelector('header h1');
                const statsContainer = document.querySelector('.stats-container');
            }
        });