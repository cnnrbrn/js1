import { isIdInCart } from "../../utils/cart.js";
import { createCartIcon } from "../cart/createCartIcon.js";

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

  const cartIcon = createCartIcon(id, title);

  postCard.append(titleElement);
  postCard.append(bodyElement);
  postCard.append(cartIcon);

  container.append(postCard);
}
