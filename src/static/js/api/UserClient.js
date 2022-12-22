import { ApiClient } from "./ApiClient";

export class UserClient extends ApiClient {
  BASE_URl = "https://dummyjson.com";
  getUserById(id) {
    const url = `${this.BASE_URl}/users/${id}`;
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
