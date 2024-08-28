import { fetchPosts } from "../../api/posts/fetchPosts.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { createPostsHtml } from "../../ui/posts/createPostsHtml.js";
import { randomiseArray } from "../../utils/randomiseArray.js";

export async function displayPosts() {
  const container = document.querySelector("#posts-container");

  try {
    // get posts from api
    const posts = await fetchPosts();
    // call function with posts array to create html
    const randomisedPosts = randomiseArray(posts);
    createPostsHtml(container, randomisedPosts);
  } catch (error) {
    console.error(error);
    displayMessage(container, "error", error.message);
  }

  // all in a try/catch
}
