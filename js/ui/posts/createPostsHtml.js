export function createPostsHtml(container, posts) {
  let parent = container;

  if (typeof container === "string") {
    parent = document.querySelector(container);
  }

  if (posts.length === 0) {
    parent.innerHTML = "No posts found";
    return;
  }

  parent.innerHTML = "";

  posts.forEach((post) => {
    const { id, title, body } = post;

    const postCard = document.createElement("a");
    postCard.classList.add("post");
    postCard.href = `details.html?id=${id}`;

    const titleElement = document.createElement("h4");
    titleElement.textContent = title;

    const bodyElement = document.createElement("p");
    bodyElement.textContent = body;

    postCard.append(titleElement);
    postCard.append(bodyElement);

    parent.append(postCard);
  });
}
