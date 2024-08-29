import { fetchPosts } from "../../api/posts/fetchPosts.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { createPostsHtml } from "../../ui/posts/createPostsHtml.js";
import { filterPosts } from "./filterPosts.js";
import { handleCategoryChange } from "./handleCategoryChange.js";

export async function displayPosts() {
  const container = document.querySelector("#posts-container");

  try {
    // get posts from api
    const posts = await fetchPosts();
    // call function with posts array to create html
    createPostsHtml(container, posts);
    filterPosts(posts);
    handleCategoryChange(posts);
  } catch (error) {
    console.error(error);
    displayMessage(container, "error", error.message);
  }

  // all in a try/catch
}
