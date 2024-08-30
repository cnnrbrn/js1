import { isIdInCart } from "../../utils/cart.js";

export function createPostHtml(container, post) {
  container.innerHTML = "";

  console.log("post", post);

  const { id, title, body } = post;

  const postCard = document.createElement("div");
  postCard.classList.add("post-detail");

  const titleElement = document.createElement("h4");
  titleElement.textContent = title;

  const bodyElement = document.createElement("p");
  bodyElement.textContent = body;

  const cartIcon = document.createElement("i");
  cartIcon.classList.add("fa-solid");
  cartIcon.id = "cart-icon";
  cartIcon.dataset.id = id;
  cartIcon.dataset.title = title;

  if (isIdInCart(id)) {
    cartIcon.classList.add("fa-cart-shopping", "green");
  } else {
    cartIcon.classList.add("fa-cart-plus");
  }

  postCard.append(titleElement);
  postCard.append(bodyElement);
  postCard.append(cartIcon);

  container.append(postCard);
}
