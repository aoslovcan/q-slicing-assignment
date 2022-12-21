export default class MobileNavigationController {

    mobileScreen = 991;

    init() {
        window.addEventListener("load", () => {
            console.log(window.innerWidth);
            this.changeNavigationView(window.innerWidth);
            this.openNavigationMenu();
        });
        window.addEventListener("resize", (event) => {
            console.log(event.target.innerWidth);
            this.changeNavigationView(window.innerWidth)
        });
    }

    changeNavigationView(windowSize) {
        if (windowSize <= this.mobileScreen) {
            this.hideNavigation();
            return;
        }
        this.showNavigation();
    }


    hideNavigation() {

        let navigationMenu = document.querySelector('.navigation-wrapper');
        let loginButton = document.getElementById('login-button');

        navigationMenu?.classList.add('hidden');
        loginButton?.classList.add('hidden');
        this.showHamburgerMenu();
    }

    showNavigation() {
        let navigationMenu = document.querySelector('.navigation-wrapper');
        let loginButton = document.getElementById('login-button');

        navigationMenu?.classList.remove('hidden');
        loginButton?.classList.remove('hidden');
        this.hideHamburger();
    }

    openNavigationMenu(){
        const hamburgerIcon = document.querySelector(".hamburger-menu");
        hamburgerIcon?.addEventListener('click', () => {
            if (!hamburgerIcon.classList.contains('is-active')) {
                hamburgerIcon.classList.add('is-active');
            } else {
                hamburgerIcon.classList.remove('is-active');
            }
        })
    }

    showHamburgerMenu() {
        let hamburgerIcon = document.querySelector(".hamburger-menu");
        let headerContainer = document.querySelector('.header-container');
        if (!hamburgerIcon) {
           headerContainer.innerHTML += `<li class="hamburger-menu"></li>`
        }
        hamburgerIcon?.classList.remove('hidden');
    }

    hideHamburger() {
        const hamburgerIcon = document.querySelector(".hamburger-menu");
        hamburgerIcon?.classList.add("hidden");
    }
}