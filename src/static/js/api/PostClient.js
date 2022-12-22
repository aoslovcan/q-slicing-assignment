import { ApiClient } from "./ApiClient";

export class PostClient extends ApiClient {
  BASE_URl = "https://dummyjson.com";
  fetchPosts() {
    const url = `${this.BASE_URl}/posts/?limit=3`;
    const data = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    return this.fetchApi(url, data);
  }
}
