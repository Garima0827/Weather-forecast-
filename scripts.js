document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username && password) {
    const loginCard = document.querySelector('.login-card');
    loginCard.classList.add('animated', 'fadeOutUp');
    setTimeout(() => {
      alert('Login successful');
     //backend work
    }, 1000); 
  } else {
    alert('Please enter both username and password');
  }
});

