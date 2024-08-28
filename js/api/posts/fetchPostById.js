import { postUrl } from "../../constants/api.js";

export async function fetchPostById(id) {
  const url = `${postUrl}/${id}`;

  const response = await fetch(url);

  if (response.ok) {
    const json = await response.json();
    return json;
  }

  throw new Error("Error fetching post");
}
