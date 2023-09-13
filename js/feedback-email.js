const form = document.getElementById('feedback-form')
const submitBtn = form.querySelector('button')

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const feedback = document.getElementById('feedback').value
    
    
    const formData = {
        name: name,
        email: email,
        feedback: feedback
    }

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "kharlregardlessarmah@gmail.com",
        Password: "B5DF47DF6AA28F06A598B5C72A19A511CE2D",
        To: `${formData.email}`,
        From: "charlesarmah.dev@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
})