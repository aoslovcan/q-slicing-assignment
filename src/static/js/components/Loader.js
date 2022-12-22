export default class Loader {
  startLoading(componentClass) {
    const loadingContext = document.querySelector(`${componentClass}`);
    loadingContext.innerHTML += `<div class="loading"></div>`;
  }

  stopLoading() {
    const loadingComponent = document.querySelector(".loading");
    loadingComponent.classList.add(".hidden");
  }
}
