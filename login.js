// Tab switching functionality
const loginTab = document.getElementById('login-tab');
const registerTab = document.getElementById('register-tab');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const goToRegister = document.getElementById('go-to-register');
const goToLogin = document.getElementById('go-to-login');
const tabs = document.getElementById('tabs');

// Tab switching event listeners
loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
    tabs.classList.remove('register-active');
});

registerTab.addEventListener('click', () => {
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
    registerForm.style.display = 'block';
    loginForm.style.display = 'none';
    tabs.classList.add('register-active');
});

goToRegister.addEventListener('click', () => {
    registerTab.click();
});

goToLogin.addEventListener('click', () => {
    loginTab.click();
});

// Form validation - Login form
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get input values
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;
    const loginError = document.getElementById('login-error');
    
    // Reset error messages
    loginError.style.display = 'none';
    document.getElementById('login-username-error').style.display = 'none';
    document.getElementById('login-password-error').style.display = 'none';
    
    // Validate fields
    let isValid = true;
    
    if (!username) {
        document.getElementById('login-username-error').style.display = 'block';
        isValid = false;
    }
    
    if (!password) {
        document.getElementById('login-password-error').style.display = 'block';
        isValid = false;
    }
    
    if (!isValid) return;
    
    // Check if user exists in localStorage (example implementation)
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        // Store current user and set authenticated flag
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('isAuthenticated', 'true');
        
        // Redirect to game page
        window.location.href = 'test2.html';
    } else {
        loginError.style.display = 'block';
    }
});

// Form validation - Register form
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get input values
    const username = document.getElementById('register-username').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm').value;
    
    // Reset error messages
    document.getElementById('register-username-error').style.display = 'none';
    document.getElementById('register-email-error').style.display = 'none';
    document.getElementById('register-password-error').style.display = 'none';
    document.getElementById('register-confirm-error').style.display = 'none';
    document.getElementById('register-error').style.display = 'none';
    
    // Validate fields
    let isValid = true;
    
    if (username.length < 3) {
        document.getElementById('register-username-error').style.display = 'block';
        isValid = false;
    }
    
    if (!validateEmail(email)) {
        document.getElementById('register-email-error').style.display = 'block';
        isValid = false;
    }
    
    if (password.length < 6) {
        document.getElementById('register-password-error').style.display = 'block';
        isValid = false;
    }
    
    if (password !== confirmPassword) {
        document.getElementById('register-confirm-error').style.display = 'block';
        isValid = false;
    }
    
    if (!isValid) return;
    
   //Check if username already exists
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.some(u => u.username === username)) {
        document.getElementById('register-error').textContent = 'Username already exists';
        document.getElementById('register-error').style.display = 'block';
        return;
    }
    
    // Store new user
    const newUser = { username, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Automatically login and set authenticated flag
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    localStorage.setItem('isAuthenticated', 'true');
    
    // Redirect to game page
    window.location.href = 'test2.html';
});

// Email validation helper function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Check if user is already logged in when page loads
window.addEventListener('DOMContentLoaded', () => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (isAuthenticated && currentUser) {
        // Redirect to game page if already logged in
        window.location.href = 'test2.html';
    }
});
