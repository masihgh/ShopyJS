const {Rest} = require('./init');

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
        // console.log(form)

      }else{
        event.preventDefault()
        event.stopPropagation()
        // console.log(form)
        const username = document.querySelector('#username');
        const password = document.querySelector('#pass');
        Rest.post('/auth/login', {
          username: username.value,
          password: password.value
        })
        .then(function (response) {
          form.innerHTML = `
          <div class="alert alert-success" role="alert">
            successfuly test authentication.
            <hr>
            <strong>Barear Token: </strong><span class="text-truncate">${response.data.token}</span>
          </div>
          `;

          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
          form.innerHTML = `
          <div class="alert alert-danger" role="alert">
          <strong>${error.request.status}</strong> <span>${error.response.data}</span> <a href="sign-in.html" class="btn btn-sm btn-danger">Back</a>
          </div>
          `;
        });
      }

      form.classList.add('was-validated')
    }, false)
  })
})()