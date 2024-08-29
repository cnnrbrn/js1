import { createPostsHtml } from "../../ui/posts/createPostsHtml.js";

export function filterPosts(posts) {
  const searchInput = document.querySelector("#search");

  if (searchInput) {
    searchInput.addEventListener("input", handleFilter);
  }

  function handleFilter(event) {
    const filterValue = event.target.value.trim().toLowerCase();
    console.log(filterValue);

    const filterPosts = posts.filter((post) => {
      if (post.title.toLowerCase().startsWith(filterValue)) {
        return true;
      }
    });

    console.log(filterPosts);
    createPostsHtml("#posts-container", filterPosts);
  }
}
