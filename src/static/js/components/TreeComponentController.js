export default class TreeComponentController {
  init() {
    let arrowElems = document.querySelectorAll(".arrow");

    if (arrowElems) {
      for (let i = 0; i < arrowElems.length; i++) {
        arrowElems[i].addEventListener("click", () => {
          arrowElems[i].classList.toggle("arrow-down");
          arrowElems[i].parentElement.parentElement
            .querySelector(".nested")
            .classList.toggle("active");
        });
      }
    }
  }
}
