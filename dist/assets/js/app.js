

Rest.get('/products/categories')
  .then(function (response) {
    let Catli = document.querySelector('#Categories_LIST');
    response.data.forEach(cat => { 
      Catli.innerHTML += `
      <div class="col d-flex align-items-start">
      <div>
        <h3 class="fw-bold mb-0 fs-4">${cat}</h3>
        <p>Paragraph of text beneath the heading to explain the heading.</p>
      </div>
    </div>
      `;
    });
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

        
Rest.get('/products?limit=10')
.then(function (response) {
  let Catli = document.querySelector('#Products');
  response.data.forEach(prd => { 
    Catli.innerHTML += `
    <div class="card mb-3" >
    <div class="row g-0">
      <div class="col-md-2 d-flex justify-content-center align-items-center">
        <img src="${prd.image}" class="img-fluid rounded-start w-50" alt="${prd.title} image" >
      </div>
      <div class="col-md-10">
        <div class="card-body">
          <h5 class="card-title">${prd.title}</h5>
          <p class="card-text">${prd.description}</p>
          <div class='d-flex'>
            <div>
            <p class="card-text h4"><small class="badge text-bg-success">${prd.price}$</small></p>
            </div>
            <div class="ms-auto">
            <button class="btn btn-outline-dark"><i class="bi bi-basket"></i> Add to Cart</button>
            <a href="single-product.html?id=${prd.id}" class="btn btn-dark"><i class="bi bi-eye-fill"></i> Show</a>
            </div>
          </div>
        </div>
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

