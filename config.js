if (user === VALID_USER && pass === VALID_PASS) {
  isLoggedIn = true;
  document.getElementById('login-overlay').style.display = 'none';
  // THIS LINE NOW STARTS THE DATA LOADING
  start();  
}
