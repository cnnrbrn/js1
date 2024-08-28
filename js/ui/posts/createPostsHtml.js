export function createPostsHtml(container, posts) {
  container.innerHTML = "";

  console.log("posts", posts);

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

    container.append(postCard);
  });
}
