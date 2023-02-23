document.getElementById('btn-submit').addEventListener('click',function(){
    
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    const passField = document.getElementById('user-pass');
    const password = passField.value;
    
    if(email == 'oishe4242@gmail.com' && password == 'secret')
    {
        window.location.href = 'bank.html';
    }
    else{
        alert('Invalid Password');
    }
})