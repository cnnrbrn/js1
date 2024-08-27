import { postsUrl } from "../../constants/api.js";

export async function fetchPosts() {
  const response = await fetch(postsUrl);

  if (response.ok) {
    const json = await response.json();
    return json;
  }

  throw new Error("bad stuff happened");
}
