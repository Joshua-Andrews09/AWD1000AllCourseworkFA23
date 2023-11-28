


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const messageElement = document.getElementById('message');
  
    // Check for blank fields
    if (email === '' || password === '') {
      messageElement.textContent = 'You seem to have forgotten your username and password.';
    } else if (email === 'admin@example.com' && password === 'password') {
      messageElement.textContent = 'Welcome back Admin!';
      messageElement.classList.remove('text-danger');
      messageElement.classList.add('text-success');
    } else {
      messageElement.textContent = 'That email and password doesn\'t seem to be right. Try again.';
    }
    // Reset form fields
    document.getElementById('loginForm').reset();
  });
  

