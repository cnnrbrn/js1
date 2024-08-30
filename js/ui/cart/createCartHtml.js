import { clearCart, getTotalPrice } from "../../utils/cart.js";
import { displayMessage } from "../common/displayMessage.js";

export function createCartHtml(container, cart) {
  // if cart is empty, display message and return
  if (cart.length === 0) {
    return displayMessage(container, "warning", "Cart is empty");
  }

  // if cart is not empty, display cart items and total items

  const totalItems = document.createElement("p");
  totalItems.textContent = `Total items: ${cart.length}`;

  //   const totalPrice = document.createElement("p");
  //   totalItems.textContent = `Total items: ${getTotalPrice(cart)}`;

  container.append(totalItems);

  cart.forEach((cartItem) => {
    const { title } = cartItem;

    const cartCard = document.createElement("div");
    cartCard.classList.add("cart-item");

    const titleElement = document.createElement("h4");
    titleElement.textContent = title;

    cartCard.append(titleElement);
    container.append(cartCard);
  });

  const button = confirmationButton();
  container.append(button);
}

function confirmationButton() {
  const button = document.createElement("button");
  button.classList.add("btn", "btn-primary");
  button.textContent = "Confirm";

  button.addEventListener("click", () => {
    clearCart();
    window.location.href = "confirmation.html";
  });

  return button;
}
