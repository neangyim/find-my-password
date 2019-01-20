var form = document.getElementById('form_connecte');var email = document.getElementById('email');var password = document.getElementById('password');form.addEventListener('submit', function(){if(email.value !== null && email.value === "michel@drucker.com"){if(password.value !== null && password.value === "this_is_password"){alert("Welcome Michel Drucker")}else{alert('password incorrect or null !');}}else{alert('email incorrect or null !');}})







