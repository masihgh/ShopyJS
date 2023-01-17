
const getProducts = async () => {
  return await Rest.get('/products');
};


const Products = getProducts();


Products.then(function (response) {
  let Catli = document.querySelector('#Products');
  response.data.forEach(prd => { 
    Catli.innerHTML += `
    <div class="card mb-3" >
    <div class="row g-0">
      <div class="col-md-2 d-flex justify-content-center align-items-center">
        <img src="${prd.image}" class="img-fluid rounded-start w-50" alt="${prd.title} image">
      </div>
      <div class="col-md-10">
        <div class="card-body">
          <h5 class="card-title">${prd.title}</h5>
          <p class="card-text h6"><small class="badge text-bg-dark">${prd.category}</small></p>
          <hr>
          <p class="card-text">${prd.description}</p>
          <div class='d-flex'>
            <div>
            <p class="card-text h4"><small class="badge text-bg-info">${prd.price}$</small></p>
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

const searchBox = document.getElementById('searchBox');

searchBox.addEventListener('input', (e) => {
    e.preventDefault();
    let search = searchBox.querySelector('input[name="s"]').value;
    var cardSelector = document.getElementById("Products");
    cardSelector.innerHTML = '';

    Products.then(function (response) {
        var d = response.data;
        d.forEach(element => {
            if(element.title.includes(search) | element.description.includes(search) ){
                cardSelector.innerHTML += `
                <div class="card mb-3" >
                <div class="row g-0">
                  <div class="col-md-2 d-flex justify-content-center align-items-center">
                    <img src="${element.image}" class="img-fluid rounded-start w-50" alt="${element.title} image">
                  </div>
                  <div class="col-md-10">
                    <div class="card-body">
                      <h5 class="card-title">${element.title}</h5>
                      <p class="card-text h6"><small class="badge text-bg-dark">${element.category}</small></p>
                      <hr>
                      <p class="card-text">${element.description}</p>
                      <div class='d-flex'>
                        <div>
                        <p class="card-text h4"><small class="badge text-bg-info">${element.price}$</small></p>
                        </div>
                        <div class="ms-auto">
                        <button class="btn btn-outline-dark"><i class="bi bi-basket"></i> Add to Cart</button>
                        <a href="single-product.html?id=${element.id}" class="btn btn-dark"><i class="bi bi-eye-fill"></i> Show</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                `;
            }
        });
    
    })
    .catch(function (error) {
      console.log(error);
    })
});
