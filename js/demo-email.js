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

    // console.log(formData.firstName)
    // window.alert(formData.firstName)

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "kharlregardlessarmah@gmail.com",
        Password : "B5DF47DF6AA28F06A598B5C72A19A511CE2D",
        To : 'charlesarmah.dev@gmail.com',
        From : "charlesarmah.dev@gmail.com",
        Subject : "This is the subject",
        Body : `${formData.firstName} sent this email`
    }).then(
    //   message => alert(message)
    );

    confirm('Do you want to Subscribe for our monthly email');
})