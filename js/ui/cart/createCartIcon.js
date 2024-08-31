import { isIdInCart } from "../../utils/cart.js";

export function createCartIcon(id, title) {
  const cartIcon = document.createElement("i");
  cartIcon.classList.add("fa-solid");
  cartIcon.dataset.action = "cart";
  cartIcon.dataset.id = id;
  cartIcon.dataset.title = title;

  if (isIdInCart(id)) {
    cartIcon.classList.add("fa-cart-shopping", "green");
  } else {
    cartIcon.classList.add("fa-cart-plus");
  }

  return cartIcon;
}
