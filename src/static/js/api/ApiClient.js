export class ApiClient {
  fetchApi(url, data) {
    return fetch(url, data)
      .then((res) => res.json())
      .then((response) => {
        return response;
      });
  }
}
