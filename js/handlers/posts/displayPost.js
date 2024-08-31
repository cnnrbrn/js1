import { fetchPostById } from "../../api/posts/fetchPostById.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { createPostHtml } from "../../ui/posts/createPostHtml.js";
import { getQueryParam } from "../../utils/getQueryParam.js";
import { handleCartCountDisplay } from "../cart/handleCartCountDisplay.js";
import { handleCartIconClick } from "../cart/handleCartIconClick.js";

export async function displayPost() {
  // get id from query string
  const id = getQueryParam("id");

  console.log("id", id);

  // if there is no id, redirect to home page
  if (!id) {
    window.location.href = "/";
  }

  const container = document.querySelector("#details-container");

  try {
    // if there is an id, fetch the post by its id
    const post = await fetchPostById(id);
    // create html for the post
    createPostHtml(container, post);
    handleCartIconClick();
    handleCartCountDisplay();
  } catch (error) {
    console.error(error);
    displayMessage(container, "error", error.message);
  }

  // wrap everything in a try/catch
}
