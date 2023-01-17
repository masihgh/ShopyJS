// Example starter JavaScript for disabling form submissions if there are invalid fields
// Refrence ==> https://getbootstrap.com/docs/5.3/forms/validation/
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }else{
        event.preventDefault()
        event.stopPropagation()
        form.innerHTML = `
        <div class="alert alert-success" role="alert">User Created Success Fully! Let's Go!</div>
        `;
        setTimeout(function () {
          window.location.href = "sign-in.html"; //will redirect to your blog page (an ex: blog.html)
       }, 2000); //will call the function after 2 secs.
   
      }

      form.classList.add('was-validated')
    }, false)
  })
})()