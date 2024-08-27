export function createPosts(container, posts) {
  container.innerHTML = "";

  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];

    const div = document.createElement("div");
    div.classList.add("post");

    const h2 = document.createElement("h2");
    h2.textContent = post.title;

    const p = document.createElement("p");
    p.textContent = post.body;

    div.append(h2);
    div.append(p);
    container.append(div);
  }
}
