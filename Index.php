<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mahadi</title>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</head>
<body>
    <form id="loginForm" method="POST">
    <input type="text" name="username" id="username">
    <input type="password" name="password" id="password">
    <button type="submit">Login</button>
    </form>
    <script>
        document.getElementById("loginForm").addEventListener('submit', function(e){
            e.preventDefault();

            let formData = new FormData(this);

            fetch('login.php',{
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if(data.status === 'success'){
                    swal.fire({
                        icon: 'success',
                        title: 'SUCCESS',
                        text: data.message
                    }).then(() =>{
                        window.location.href = "Dashboard.php";
                    });
                } else{
                    swal.fire({
                        icon: 'error',
                        title: 'Invalid',
                        text: data.message
                    })
                }
            })
            .catch(error =>{
                console.error('Error:', error);
                swal.fire({
                    icon: 'info',
                    title: 'Wrong input',
                    text: 'An error occured'
                });
            });
        });
    </script>
</body>
</html>