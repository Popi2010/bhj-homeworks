const products = [...document.querySelectorAll(".product")];
const cartProducts = document.querySelector(".cart__products");
const cart = document.querySelector(".cart");


products.forEach(product => {
  let productImage = product.querySelector("img");
  let productQuantityControlDec = product.querySelector(".product__quantity-control_dec");
  let productQuantityValue = product.querySelector(".product__quantity-value");
  let value = Number(productQuantityValue.textContent);
  let productQuantityControlInc = product.querySelector(".product__quantity-control_inc");
  let productAdd = product.querySelector(".product__add");
  productQuantityControlDec.addEventListener(
    "click",
    () => {
      if (value > 1) {
        value -= 1;
        productQuantityValue.textContent = value;
      }
    }
  );
  productQuantityControlInc.addEventListener(
    "click", () => {
      value += 1;
      productQuantityValue.textContent = value;
    }
  );
  productAdd.addEventListener(
    "click", () => {
      let children = cartProducts.children;
      if (!cartProducts.children.length) {
        cart.style.display = "block";
      }
      let cartProduct = [...children].find(element => element.dataset.id === product.dataset.id)
      if (cartProduct) {
        let cartProductValue = cartProduct.querySelector(".cart__product-count");
        cartProductValue.textContent = Number(cartProductValue.textContent) + value;
      } else {
        cartProduct = document.createElement("div");
        cartProduct.className = "cart__product";
        cartProduct.dataset.id = product.dataset.id;
        cartProduct.innerHTML = `<img class="cart__product-image" src="${productImage.src}">
          <div class="cart__product-count">${value}</div>`
        cartProducts.insertAdjacentElement("beforeend", cartProduct);
        cartProduct.addEventListener("click", event => {
          cartProduct.remove(); 
          if (!children.length) {
            cart.style.display = "none";
          }
        });
      }
      productQuantityValue.textContent = "1";
      value = 1;

    }
  );
});