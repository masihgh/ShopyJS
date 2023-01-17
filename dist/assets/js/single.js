const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);


const id = urlParams.get('id')

Rest.get('/products/'+id)
  .then(function (response) {
    if(response.data === ''){
        document.getElementById('pr_c').innerHTML = `
        <div class="alert alert-danger" role="alert">
            <strong>404!</strong> product not found.
        </div>
        `;
    }else{
        document.querySelector('#title').innerHTML = response.data.title;
        document.querySelector('#desc').innerHTML = response.data.description;
        document.querySelector('#price').innerHTML = response.data.price + '$';
        document.querySelector('#price-duble').innerHTML = 2 * response.data.price + '$';
        document.querySelector('#pic').innerHTML = `<img class="card-img-top mb-5 mb-md-0" src="${response.data.image}" alt="${response.data.name} photo" />`;
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

  Rest.get('/products?limit=6&sort=desc')
.then(function (response) {
  let Catli = document.querySelector('#Products');
  response.data.forEach(prd => { 
    Catli.innerHTML += `
    <div class="col mb-5">
        <div class="card h-100">
            <img class="card-img-top" src="${prd.image}" width="400px" height="300px" alt="${prd.title} image" />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <h5 class="fw-bolder">${prd.title}</h5>
                </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent d-flex">
                <div class="me-auto"><a href="single-product.html?id=${prd.id}" class="btn btn-dark"><i class="bi bi-eye-fill"></i> Show</a></div>
                <div class=""><span class="btn btn-success">${prd.price}$</span></div>
            </div>
        </div>
    </div>
    `;
  });
})
.catch(function (error) {
  // handle error
  console.log(error);
})
