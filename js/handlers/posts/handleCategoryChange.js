import { createPostsHtml } from "../../ui/posts/createPostsHtml";

export function handleCategoryChange(posts) {
  const categorySelect = document.querySelector("#category");

  if (categorySelect) {
    categorySelect.addEventListener("change", respondToCategoryChange);
  }

  function respondToCategoryChange(event) {
    console.log(event.target.value);

    const selectedCategory = event.target.value;

    const filteredPosts = posts.filter((post) => {
      if (post.category === selectedCategory) {
        return true;
      }
    });

    createPostsHtml("#posts-container", filteredPosts);
  }
}
