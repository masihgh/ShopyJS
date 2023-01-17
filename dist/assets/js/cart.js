
const cart_user = 5;
let total_cart = 0;
Rest.get('/carts/' + cart_user)
  .then(function (response) {
    response.data.products.forEach((pr) => {
      let cart_content = document.querySelector('#cart-content');
      Rest.get('/products/' + pr.productId)
        .then(function (prd) {
          cart_content.innerHTML += `
            <tr class="">
                <td scope="row"><img src="${prd.data.image}" class="img-fluid rounded-start w-25" alt="${prd.data.title} image"></td>
                <td>${prd.data.title}</td>
                <td>${prd.data.description}</td>
                <td><input type="text" class="form-control" value="${pr.quantity}" /></td>
                <td>${prd.data.price}$</td>
                <td><button class="btn btn-danger"><i class="bi bi-trash3"></i></button></td>
            </tr>`;
            
            total_cart = total_cart + (prd.data.price * pr.quantity);
            document.querySelector('#total-cart').innerHTML = total_cart+'$';


        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    })


  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })