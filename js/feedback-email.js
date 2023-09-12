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

    console.log(formData)
})