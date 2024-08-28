export function createPostHtml(container, post) {
  container.innerHTML = "";

  console.log("post", post);

  const { title, body } = post;

  const postCard = document.createElement("div");
  postCard.classList.add("post-detail");

  const titleElement = document.createElement("h4");
  titleElement.textContent = title;

  const bodyElement = document.createElement("p");
  bodyElement.textContent = body;

  postCard.append(titleElement);
  postCard.append(bodyElement);

  container.append(postCard);
}
