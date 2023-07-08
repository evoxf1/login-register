document.addEventListener('DOMContentLoaded', () => {
    const colors = ['#FF9F55', '#52C2B8', '#FF6161', '#A77DF6', '#69E3FF'];
  
    const bubblesContainer = document.createElement('div');
    bubblesContainer.className = 'bubbles-container';
    document.body.appendChild(bubblesContainer);
  
    const createBubble = () => {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
  
      const size = Math.floor(Math.random() * 80) + 20;
      const x = Math.floor(Math.random() * 100);
      const duration = Math.floor(Math.random() * 10) + 5;
      const color = colors[Math.floor(Math.random() * colors.length)];
  
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${x}%`;
      bubble.style.animationDuration = `${duration}s`;
      bubble.style.backgroundColor = color;
  
      bubblesContainer.appendChild(bubble);
  
      bubble.addEventListener('animationend', () => {
        bubble.remove();
      });
    };
  
    setInterval(createBubble, 1500);
  
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginErrorMessage = document.getElementById('login-error-message');
    const registerErrorMessage = document.getElementById('register-error-message');
  
    loginForm.addEventListener('submit', handleLogin);
    registerForm.addEventListener('submit', handleRegister);
  
    function handleLogin(event) {
      event.preventDefault();
      
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      if (!validateEmail(email) || password.length < 8) {
        displayErrorMessage(loginErrorMessage, 'Invalid email or password (password should be at least 8 characters)');
      } else {
        // Perform login logic here
        // Example: You can send the data to a backend server for verification
        console.log('Login successful');
        // Redirect to the company dashboard
        window.location.href = 'company-dashboard.html';
      }
    }
  
    function handleRegister(event) {
      event.preventDefault();
  
      const companyName = document.getElementById('company-name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      if (companyName.trim() === '' || !validateEmail(email) || password.length < 8) {
        displayErrorMessage(registerErrorMessage, 'Please fill in all fields correctly');
      } else {
        // Perform registration logic here
        // Example: You can send the data to a backend server to create a new company account
        console.log('Registration successful');
        // Redirect to the login page
        window.location.href = 'index.html';
      }
    }
  
    function validateEmail(email) {
      // Simple email validation regex pattern
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    function displayErrorMessage(element, message) {
      element.textContent = message;
      element.style.display = 'block';
    }
  });
  