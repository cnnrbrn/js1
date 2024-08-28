import { postUrl } from "../../constants/api.js";

export async function fetchPosts() {
  const response = await fetch(postUrl);

  if (response.ok) {
    const json = await response.json();
    return json;
  }

  throw new Error("Error fetching posts");
}
