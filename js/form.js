const form = document.getElementById('form-container')

const button = document.querySelector('.submitBtn');

button.addEventListener('click', (e)=>{
    e.preventDefault();
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const formData = {
        firstName: fname,
        lastName: lname,
        email: email,
        phone: phone
    }

    window.alert(formData[firstName])
})