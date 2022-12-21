import TreeComponentController from "./TreeComponentController";

export default class FooterMobileView {

    mobileScreen = 600;

    init() {
        window.addEventListener("load", () => {
            this.createTreeComponent(window.innerWidth);
        });
        window.addEventListener("resize", (event) => {
            this.createTreeComponent(window.innerWidth)
        });
    }

    createTreeComponent(width){

        let treeComponentController = new TreeComponentController();
        let allFooterNav = document.querySelectorAll('.footer-list');
        let allTitles = document.querySelectorAll('.c-footer__col2 .title');

        if(width <= this.mobileScreen){
            if(allFooterNav){
                for(let i = 0; i < allFooterNav.length; i++){
                    allFooterNav[i].classList.add('nested')
                }
            }

            if(allTitles){
                for(let i = 0; i < allTitles.length; i++){

                    let arrow = allTitles[i].querySelector('.arrow');
                    if(!arrow){
                        allTitles[i].innerHTML += `<span class="arrow"></span>`
                    }
                }
            }

            treeComponentController.init();
            
            return;
        }

        if(allFooterNav){
            for(let i = 0; i < allFooterNav.length; i++){
               if(allFooterNav[i]?.classList.contains('nested')){
                   allFooterNav[i].classList.remove('nested')
               }

            }
        }

        if(allTitles){
            for(let i = 0; i < allTitles.length; i++){
                let arrow = allTitles[i].querySelector('.arrow');
                if(arrow){
                    allTitles[i].removeChild(arrow);
                }
            }
        }
    }

}