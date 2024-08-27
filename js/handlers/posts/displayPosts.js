import { fetchPosts } from "../../api/posts/fetchPosts.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { createPosts } from "../../ui/posts/createPosts.js";

export function displayPosts() {
  document.addEventListener("DOMContentLoaded", async () => {
    try {
      const postsContainer = document.querySelector("#posts-container");
      const posts = await fetchPosts();
      createPosts(postsContainer, posts);
    } catch (error) {
      console.error(error);
      displayMessage("#posts-container", "error", error.message);
    }
  });
}
