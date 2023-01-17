

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

        
Rest.get('/products?limit=5')
.then(function (response) {
  let Catli = document.querySelector('#Products');
  response.data.forEach(prd => { 
    Catli.innerHTML += `
    <div class="card mb-3" >
    <div class="row g-0">
      <div class="col-md-2 d-flex justify-content-center align-items-center">
        <img src="${prd.image}" class="img-fluid rounded-start" alt="${prd.title} image">
      </div>
      <div class="col-md-10">
        <div class="card-body">
          <h5 class="card-title">${prd.title}</h5>
          <p class="card-text">${prd.description}</p>
          <p class="card-text h4"><small class="badge text-bg-success">${prd.price}$</small></p><button class="btn btn-dark">
          <i class="bi bi-basket"></i> Add to Cart</button>
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

