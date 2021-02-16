console.log("Form Validations with Regular Expressions");


const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
let failure = document.getElementById('failure');
let success = document.getElementById('success');
let validEmail = false;
let validPhone = false;
let validUser = false;
let validPassword = false;
$('#success').hide();
$('#failure').hide();

// console.log(name, email, phone);

name.addEventListener('blur', () => {
    console.log("name is blured");
    // validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(regex, str);
    if(regex.test(str)) {
        console.log("Your name is valid");
        name.classList.remove('is-invalid');
        name.classList.add('is-valid');
        validUser = true;
    } else  {
        console.log("Your name is not valid");
        name.classList.remove('is-valid');
        name.classList.add('is-invalid');
        validUser = false;
    }
});
email.addEventListener('blur', () => {
    console.log("email is blured");
    // validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if(regex.test(str)) {
        console.log("Your email is valid");
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
        validEmail = true;
    } else  {
        console.log("Your email is not valid");
        email.classList.remove('is-valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
});
phone.addEventListener('blur', () => {
    console.log("phone is blured");
    // validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if(regex.test(str)) {
        console.log("Your phone is valid");
        phone.classList.remove('is-invalid');
        phone.classList.add('is-valid');
        validPhone = true;
    } else  {
        console.log("Your phone is not valid");
        phone.classList.remove('is-valid');
        phone.classList.add('is-invalid');
        validPhone = false;
    }
});
password.addEventListener('blur', () => {
    console.log("Password is blured");
    // validate password here
    let regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]){8}.*$/;
    // let regex=/^(?=.{8,})([0-9a-zA-z]){1}([@#$%^&+=]){1}$/;
    let str=password.value;
    if(regex.test(str)) {
        console.log("Your Password is valid");
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
        validPassword = true;
    } else {
        console.log("Your Password is not valid");
        password.classList.remove('is-valid');
        password.classList.add('is-invalid');
        validPassword = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log("you clicked on submit");
    // submit form here
    if(validEmail && validPhone && validUser && validPassword) {
        console.log("Phone, email, Password and user are valid. Submitting the form");
        console.log(validUser, validEmail, validPhone, validPassword);
        let formElement = document.getElementById('travelForm');
        formElement.reset();
        name.classList.remove('is-valid');
        email.classList.remove('is-valid');
        phone.classList.remove('is-valid');
        password.classList.remove('is-valid');
        success.classList.add('show');
        $('#failure').hide();
        $('#success').show();
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
          });
    } else {
        console.log('One out of Phone, email or user are not valid. Hence, not submitting the form. Please correct the errors and try again');
        
        failure.classList.add('show');
        // success.classList.remove('show');
        // $('#success').alert('close');
        $('#success').hide();
        $('#failure').show();
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
          });
    }
})