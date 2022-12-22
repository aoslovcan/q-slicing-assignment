export default class TreeComponentController {

    init() {
        let arrowElem = document.querySelectorAll(".arrow");

        if (arrowElem) {
            for (let i = 0; i < toggler.length; i++) {
                arrowElem[i].addEventListener("click", () => {
                    arrowElem[i].classList.toggle("arrow-down");
                    arrowElem[i].parentElement.parentElement.querySelector('.nested').classList.toggle("active")
                })
            }
        }
    }
}