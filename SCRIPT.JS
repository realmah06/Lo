document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get username and password values
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Example validation (replace with your own logic)
  if (username === 'admin' && password === 'password') {
    // If valid, show success message and redirect to homepage (example href)
    Swal.fire({
      icon: 'success',
      title: 'Login Successful!',
      text: 'Redirecting to admin dashboard...',
      timer: 2000,
      showConfirmButton: true
    }).then(() => {
      // Redirect to admin dashboard
      window.location.href = "admin_dashboard.html";
    });
  } else {
    // If invalid, show error message
    Swal.fire({
      icon: 'error',
      title: 'Login Failed',
      text: 'Invalid username or password'
    });
  }
});
