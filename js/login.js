//step-1: Add click event handler with the submit button. 
document.getElementById('btn-submit').addEventListener('click', function(){
    //Step-2: Get the email address inside the email input field.
    //
    const valueUsername = document.getElementById('user-email');
    const email = valueUsername.value;

    //Step-3: get the password
    //3.a: get id on the html element
    //3.b: get the element
    //3.c: get the value from the element

    const valuePassword = document.getElementById('user-password');
    const password = valuePassword.value;


    if(email === 'monir@gmail.com' && password ==='123456'){
        window.location.href = 'bank.html';
    }else{
        console.log('You are not valid id');
    }
});