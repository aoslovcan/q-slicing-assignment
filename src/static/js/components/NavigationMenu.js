export default class NavigationMenu {
  navigationListItem = [`About`, `Offices`, `Packages`, `Benefits`, `Prices`];

  init() {
    let navigationWrapper = document.getElementById("main-navigation");

    if (navigationWrapper) {
      navigationWrapper.innerHTML += `
            ${this.createNavigationMenu(
              this.navigationListItem,
              "row"
            ).replaceAll(",", "")}
            `;
    }

    this.createMobileNavigation();
  }

  createNavigationMenu(items, className) {
    return `
        <ul class='navigation-wrapper__menu ${className}'>
            ${items.map((item) => {
              return `
                  <li class="navigation-wrapper__menu__item">
                    <a class="navigation-wrapper__menu__item__link" href="#">
                        ${item}
                    </a>
                  </li> `;
            })}
        </ul>
        `;
  }

  createMobileNavigation() {
    let mobileNavigation = document.querySelector(".mobile-navigation-wrapper");

    if (mobileNavigation) {
      mobileNavigation.innerHTML += `
            ${this.createNavigationMenu(
              this.navigationListItem,
              "column"
            ).replaceAll(",", "")}
            `;
    }
  }
}
