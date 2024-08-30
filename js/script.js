import { displayPosts } from "./handlers/posts/displayPosts.js";
import { displayPost } from "./handlers/posts/displayPost.js";
import { displayCart } from "./handlers/cart/displayCart.js";

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
    case "/cart.html":
      displayCart();
  }
}

router();

// IIFE - instantly-invoked function expression
