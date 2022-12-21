export default class TreeComponentController {

    init(){
        let toggler = document.querySelectorAll(".arrow");

        if(toggler){
            for(let i = 0; i < toggler.length;i++){
                toggler[i].addEventListener("click", () => {
                    toggler[i].classList.toggle("arrow-down");
                    toggler[i].parentElement.parentElement.querySelector('.nested').classList.toggle("active")
                })
            }

        }
    }
}