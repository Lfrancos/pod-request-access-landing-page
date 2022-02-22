// selectors of the items that I'm going to use
const email = document.querySelector('.input-field');
const err = document.querySelector('.error');
const submit = document.querySelector('.button')
const form = document.querySelector('.form')

// this is  a formula to see if the formating of an email is ok or not
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// this will print the right error message depending on the error that you make
// /////////// right now  is not working the way I expect it to work........
form.addEventListener('submit', e => {
    const message = [];
    // console.log(message.value.match(emailFormat));
    if ( email.value === '' || email.value == null) {
        e.preventDefault();
        message.push('Opps! Please add your email.')
        err.innerText = message.join(',');
    } else if (!email.value.match(emailFormat)) {
        e.preventDefault();
        message.push('Opps! Please check your email.')
        err.innerText = message.join(',');
    } else {
    }
})

