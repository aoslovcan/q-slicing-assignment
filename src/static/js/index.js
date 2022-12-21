import "../scss/styles.scss";
import HeroSlider from "./components/HeroSlider";
import RealStories from "./components/RealStories";
import MobileNavigationController from "./components/MobileNavigationController";

const ready = (callbackFunc) => {
    if (document.readyState !== "loading") {
        /**
         * Document is already ready, call the callback directly
         */
        callbackFunc();
    } else if (document.addEventListener) {
        /**
         * All modern browsers to register DOMContentLoaded
         */
        document.addEventListener("DOMContentLoaded", callbackFunc);
    } else {
        /**
         * Old IE browsers
         */
        document.attachEvent("onreadystatechange", function () {
            if (document.readyState === "complete") {
                callbackFunc();
            }
        });
    }

};

ready(() => {
    const heroSlider = new HeroSlider();
    const realStories = new RealStories();
    const mobileNavigation = new MobileNavigationController();

    heroSlider.init();
    realStories.init();
    mobileNavigation.init();
})