export default class MobileNavigationController {
  mobileScreen = 991;

  init() {
    window.addEventListener("load", () => {
      this.changeNavigationView(window.innerWidth);
      this.openNavigationMenu();
    });
    window.addEventListener("resize", (event) => {
      this.changeNavigationView(window.innerWidth);
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
    let navigationMenu = document.querySelector(".navigation-wrapper");
    let loginButton = document.getElementById("login-button");

    navigationMenu?.classList.add("hidden");
    loginButton?.classList.add("hidden");
    this.showHamburgerMenu();
  }

  showNavigation() {
    let navigationMenu = document.querySelector(".navigation-wrapper");
    let loginButton = document.getElementById("login-button");

    navigationMenu?.classList.remove("hidden");
    loginButton?.classList.remove("hidden");
    this.hideHamburger();
  }

  openNavigationMenu() {
    const hamburgerIcon = document.querySelector(".hamburger-menu");
    const mobileNavigation = document.querySelector(
      ".mobile-navigation-wrapper"
    );
    hamburgerIcon?.addEventListener("click", () => {
      hamburgerIcon.classList.toggle("is-active");
      mobileNavigation.classList.toggle("hidden");
      mobileNavigation.classList.toggle("active");
    });
  }

  showHamburgerMenu() {
    let hamburgerIcon = document.querySelector(".hamburger-menu");
    let headerContainer = document.querySelector(".header-container");
    if (!hamburgerIcon) {
      headerContainer.innerHTML += `<li class="hamburger-menu"></li>`;
    }
    hamburgerIcon?.classList.remove("hidden");
  }

  hideHamburger() {
    const hamburgerIcon = document.querySelector(".hamburger-menu");
    hamburgerIcon?.classList.add("hidden");
  }
}
