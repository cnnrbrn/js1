import { addToCart, isIdInCart, removeFromCart } from "../../utils/cart.js";
import { handleCartCountDisplay } from "./handleCartCountDisplay.js";

export function handleCartIconClick() {
  const cartIcons = document.querySelectorAll("i[data-action='cart']");

  cartIcons.forEach((cartIcon) => {
    cartIcon.addEventListener("click", respondToCartIconClick);

    function respondToCartIconClick(event) {
      const cartIcon = event.target;

      console.log(event);

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

      handleCartCountDisplay();
    }
  });
}
