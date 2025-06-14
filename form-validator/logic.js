const form = document.getElementById('myForm');
form.addEventListener('submit', function(e){
    e.preventDefault();

    document.getElementById('usernameError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('passwordError').innerHTML = '';
    document.getElementById('confirmPasswordError').innerHTML = '';

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let valid = true;

    if(username < 3 ){
        document.getElementById('usernameError').innerHTML = 'username must be atleast 3 character';
        valid = false;
    }

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailPattern.test(email)){
        document.getElementById('emailError').innerHTML = 'please enter a valid email';
        valid = false;
    }

    if(password < 6){
        document.getElementById('passwordError').innerHTML = 'password must be atleast 6 character';
        valid = false;
    }

    if(confirmPassword !== password){
        document.getElementById('confirmPasswordError').innerHTML = 'passwords do not matched';
        valid = false;
    }
    

    if(valid){
        alert('form submitted successfully');
        form.reset();
    }

})