const email = document.querySelector('.input-field');
const err = document.querySelector('.error');
const submit = document.querySelector('.button')
const form = document.querySelector('.form')

// err.style.display = 'none';

// console.log(email.value);
console.log(typeof email.value);
form.addEventListener('submit', e => {
    const message = [];

    if ( email.value === '' || email.value == null) {
        message.push('Opps! Please add your email.')
    }
    console.log(message);
    if (message.length > 0) {
        e.preventDefault();
        err.innerText = message.join(',');
    }
    if (message.length < 0) {
        e.preventDefault();
        err.innerText = 'hello';
    }
})

