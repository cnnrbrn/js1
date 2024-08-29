import { displayPosts } from "./handlers/posts/displayPosts.js";
import { displayPost } from "./handlers/posts/displayPost.js";

function router() {
  const { pathname } = window.location;

  console.log(pathname);

  switch (pathname) {
    case "/":
    case "/index.html":
      console.log("I'm on on the home page");
      displayPosts();
      break;
    case "/details.html":
      console.log("I'm on on the details page");
      displayPost();
      break;
  }
}

router();

// IIFE - instantly-invoked function expression
