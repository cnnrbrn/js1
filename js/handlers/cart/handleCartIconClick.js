import { addToCart, isIdInCart, removeFromCart } from "../../utils/cart.js";

export function handleCartIconClick() {
  const cartIcon = document.querySelector("#cart-icon");

  cartIcon.addEventListener("click", respondToCartIconClick);

  function respondToCartIconClick(event) {
    const cartIcon = event.target;

    const { id, title } = cartIcon.dataset;

    if (isIdInCart(id)) {
      removeFromCart(id);
      cartIcon.classList.add("fa-cart-plus");
      cartIcon.classList.remove("fa-cart-shopping", "green");
    } else {
      addToCart(id, title);
      cartIcon.classList.remove("fa-cart-plus");
      cartIcon.classList.add("fa-cart-shopping", "green");
    }
  }
}
